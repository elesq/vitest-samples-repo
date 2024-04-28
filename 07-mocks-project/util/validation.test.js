import { describe, it, expect } from 'vitest';
import { validateNotEmpty } from './validation';

describe('validation.js tests', () => {
    it('should not throw an error when not empty', () => {
        const content = 'non empty content';
        const validationFn = () => validateNotEmpty(content);
        expect(validationFn).not.toThrow();
    });

    it('should throw an error when an empty input is provided', () => {
        const emptyInput = '';
        const testErrorMessage = 'empty values not allowed';
        const validationFn = () =>
            validateNotEmpty(emptyInput, testErrorMessage);
        expect(validationFn).toThrow(testErrorMessage);
    });

    it('should throw an error when an string of blanks is provided', () => {
        const emptyInput = '     ';
        const testErrorMessage = 'blank values not allowed';
        const validationFn = () =>
            validateNotEmpty(emptyInput, testErrorMessage);
        expect(validationFn).toThrow(testErrorMessage);
    });

    it('should throw an error when no input value is provided', () => {
        const input = null;
        const testErrorMessage = 'nulls not allowed';
        const validationFn = () => validateNotEmpty(input, testErrorMessage);
        expect(validationFn).toThrow(testErrorMessage);
    });
});
