/**
 * validates that a string is not empty
 * @param {*} value
 */
export function validateStringNotEmpty(value) {
    if (value.trim().length === 0) {
        throw new Error('Invalid input - must not be empty.');
    }
}

/**
 * performs a boolean test on a given input to ensure it is
 * a numeric or it throws an error
 * @param {*} number
 */
export function validateNumber(number) {
    if (isNaN(number) || typeof number !== 'number') {
        throw new Error('Invalid number input.');
    }
}
