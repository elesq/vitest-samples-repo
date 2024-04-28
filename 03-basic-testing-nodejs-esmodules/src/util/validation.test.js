import { it, expect, describe } from 'vitest';
import { validateNumber, validateStringNotEmpty } from './validation';

describe('validateNumber() tests:', () => {
    it('should sucessfully validate a numeric input value', () => {
        const input = 100;
        const validationFn = () => validateNumber(input);
        expect(validationFn).not.toThrow();
    });

    it('should throw an error even when a string input can be coerced to a numeric value', () => {
        const input = '100';
        const validationFn = () => validateNumber(input);
        expect(validationFn).toThrow();
    });

    it('should throw an error when no input is provided', () => {
        const validationFn = () => validateNumber();
        expect(validationFn).toThrow();
    });

    it('should throw an error when non numeric input is provided', () => {
        const input = 'TESTDATA';
        const validationFn = () => validateNumber(input);
        expect(validationFn).toThrow();
    });
});

describe('validateStringNotEmpty() tests:', () => {
    it('should not throw an error when a non empty string input ios provided', () => {
        const input = 'TESTDATA';
        const validationFn = () => validateStringNotEmpty(input);
        expect(validationFn).not.toThrow();
    });

    it('should throw an error when an empty string input is provided', () => {
        const input = '';
        const validationFn = () => validateStringNotEmpty(input);
        expect(validationFn).toThrow();
    });

    it('should throw an error when an no input is provided', () => {
        const input = '';
        const validationFn = () => validateStringNotEmpty();
        expect(validationFn).toThrow();
    });
});
