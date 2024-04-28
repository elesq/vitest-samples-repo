import { it, expect, describe } from 'vitest';
import { transformToNumber } from './numbers';

describe('transformToNumber() tests:', () => {
    it('should return a numeric input when passed a numeric input', () => {
        const input = 100;
        const expectedResult = 100;
        const result = transformToNumber(input);
        expect(result).toBe(expectedResult);
    });

    it('should return a numeric input when string input can be successfully coerced to a numeric', () => {
        const input = '100';
        const expectedResult = 100;
        const result = transformToNumber(input);
        expect(result).toBe(expectedResult);
    });

    it('should yield NaN when string input cannot be successfully coerced to a numeric', () => {
        const input = 'TESTDATA';
        const result = transformToNumber(input);
        expect(result).toBeNaN();
    });

    it('should yield NaN when no input is provided', () => {
        const result = transformToNumber();
        expect(result).toBeNaN();
    });
});
