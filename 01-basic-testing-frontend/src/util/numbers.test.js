import { it, expect, describe } from 'vitest';
import { cleanNumbers, transformToNumber } from './numbers';

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

describe('cleanNumbers() tests:', () => {
    it('should convert strings containing numerics to a numbers types', () => {
        const input = ['1', '2', '3'];
        const result = cleanNumbers(input);
        expect(result[0]).toBeTypeOf('number');
    });

    it('should convert strings array containing numerics to a numbers array', () => {
        const input = ['1', '2', '3'];
        const expectedResult = [1, 2, 3];
        const result = cleanNumbers(input);
        expect(result).toEqual(expectedResult);
    });

    it('should throws an Error when supplied character input', () => {
        const input = ['a', 'b', 'c'];
        const cleanFn = () => cleanNumbers(input);
        expect(cleanFn).toThrowError(/Invalid number input/);
    });
});
