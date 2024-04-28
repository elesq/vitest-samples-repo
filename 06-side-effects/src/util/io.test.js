import { it, expect, describe, vi } from 'vitest';
import { promises as fs } from 'fs';

import writeData from './io';

vi.mock('fs');
vi.mock('path', () => {
    return {
        default: {
            join: (...args) => {
                return args[args.length - 1];
            },
        },
    };
});

describe('io.js tests', () => {
    it('should execute the writeFile method', () => {
        const testData = 'Some test data';
        const testFileName = 'test.txt';

        writeData(testData, testFileName);
        expect(fs.writeFile).toBeCalledWith(testFileName, testData);
    });

    it('should return a promise that resolves', () => {
        const testData = 'Some test data';
        const testFileName = 'test.txt';
        return expect(
            writeData(testData, testFileName)
        ).resolves.toBeUndefined();
    });
});
