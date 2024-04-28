import { validateStringNotEmpty, validateNumber } from './validation.js';

/**
 * Processes an input to ensure a number type is returned or a NaN
 * is thrown. It performs a simple `+value` operation on the input.
 * Where the input is of type number no mutation will take place.
 * Where a string value is passed in a cast operation is performed by
 * `+value` which will convert a string to a number. Where casting
 * to a number is not possible due to  alpha characters or special
 * characters in the input a NaN should be thrown by the function
 * @param {*} value
 * @returns `number` | `NaN`
 */
export function transformToNumber(value) {
    return +value;
}

/**
 * wrapper function that validates input
 * @param {*} numberValues
 * @returns array[number]
 */
export function cleanNumbers(numberValues) {
    const numbers = [];
    for (const numberInput of numberValues) {
        validateStringNotEmpty(numberInput);
        const number = transformToNumber(numberInput);
        validateNumber(number);
        numbers.push(number);
    }
    return numbers;
}
