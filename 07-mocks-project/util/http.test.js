import { describe, it, expect, vi } from 'vitest';
import { sendDataRequest } from './http';
import { HttpError } from './errors';

const testResponseData = {
    testKey: 'test data',
};
const testFetch = vi.fn((url, options) => {
    return new Promise((resolve, reject) => {
        if (typeof options.body !== 'string') {
            reject('not a string type body');
        }
        const testResponse = {
            ok: true,
            json() {
                return new Promise((resolve, reject) => {
                    resolve(testResponseData);
                });
            },
        };
        resolve(testResponse);
    });
});

vi.stubGlobal('fetch', testFetch);

describe('http.js sendDataRequest() tests', () => {
    it('should return available response data', () => {
        const testData = { key: 'testDataItem' };
        return expect(sendDataRequest(testData)).resolves.toEqual(
            testResponseData
        );
    });

    it('should convert provided data to JSON before sending a request', async () => {
        const testData = { key: 'testDataItem' };

        let errorMessage;
        try {
            await expect(sendDataRequest(testData));
        } catch (error) {
            errorMessage = error;
        }

        expect(errorMessage).not.toBe('not a string type body');
    });

    it('should throw an HttpError in case of a non-ok response', () => {
        testFetch.mockImplementationOnce((url, options) => {
            return new Promise((resolve, reject) => {
                const testResponse = {
                    ok: false,
                    json() {
                        return new Promise((resolve, reject) => {
                            resolve(testResponseData);
                        });
                    },
                };
                resolve(testResponse);
            });
        });

        const testData = { key: 'testDataItem' };
        return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(
            HttpError
        );
    });
});
