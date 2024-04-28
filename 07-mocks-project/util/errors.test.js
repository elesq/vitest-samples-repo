import { it, describe, expect } from 'vitest';
import { HttpError, ValidationError } from './errors';

describe('HTTPError tests', () => {
    it('should contain the provided statusCode, message and data', () => {
        const testStatusCode = 1;
        const testMessage = 'testMessage';
        const testData = { key: 'test' };

        const testError = new HttpError(testStatusCode, testMessage, testData);
        expect(testError.statusCode).toBe(testStatusCode);
        expect(testError.message).toBe(testMessage);
        expect(testError.data).toBe(testData);
    });

    it('should contain the provided statusCode, message and data', () => {
        const testStatusCode = 1;
        const testMessage = 'testMessage';

        const testError = new HttpError(testStatusCode, testMessage);
        expect(testError.data).toBeUndefined();
    });
});

describe('validation error tests', () => {
    it('should contain the provided message', () => {
        const testMessage = 'validationTest';

        const testError = new ValidationError(testMessage);
        expect(testError.message).toBe(testMessage);
    });
});
