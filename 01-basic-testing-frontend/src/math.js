import { cleanNumbers } from './util/numbers.js';

/**
 * Variadic function that accepts a range of input options. String inputs
 * which may be successfully coerced to numerics are considered a valid
 * option. Any alpha characters encountered will enforce a `NaN` return.
 * @param {*} numbers
 * @returns `number` | `NaN`
 */
export function add(numbers) {
    let sum = 0;

    for (const number of numbers) {
        // Uses the +modifier enforces check /
        // coercion to numeric, failing here
        // throws a NaN
        sum += +number;
    }
    return sum;
}

/**
 * return a cleaned set of numbers or the associated error
 * @param {*} numberValues
 * @returns numeric | error
 */
export function calculateResult(numberValues) {
    let result = '';
    try {
        const numbers = cleanNumbers(numberValues);
        result = add(numbers).toString();
    } catch (error) {
        result = error.message;
    }
    return result;
}
