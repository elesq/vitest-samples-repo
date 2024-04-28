import { it, expect, describe } from 'vitest';
import { add } from './math';

describe('add() tests:', () => {
    it('should sum all number values in an array', () => {
        const numbers = [1, 2, 3];
        const expectedResult = numbers.reduce((prev, cur) => prev + cur, 0);
        const result = add(numbers);
        expect(result).toBe(expectedResult);
    });

    it('should yield a NaN value if at least one invalid input is provided', () => {
        const inputs = [1, 2, 'invalid'];
        const result = add(inputs);
        expect(result).toBeNaN();
    });

    it('should yield the correct sum if numeric inputs are submitted as strings', () => {
        const inputs = ['1', '2', '3'];
        const expectedResult = inputs.reduce((prev, cur) => +prev + +cur, 0);
        const result = add(inputs);
        expect(result).toBe(expectedResult);
    });

    it('should yield zero as the result when an empty array is passed', () => {
        const numbers = [];
        const expectedResult = 0;
        const result = add(numbers);
        expect(result).toBe(expectedResult);
    });

    it('should throw an error if no inputs are provided to the function', () => {
        const resultFn = () => {
            add();
        };
        expect(resultFn).toThrow(/is not iterable/);
    });

    it('should throw an error if provided with multiple individual arguments instead of an array', () => {
        const inputOne = 1;
        const inputTwo = 2;
        const resultFn = () => {
            add(inputOne, inputTwo);
        };
        expect(resultFn).toThrow(/is not iterable/);
    });
});
