/**
 * extracts input values from the DOM and returns them in an array
 * @param {*} formData
 * @returns array
 */
export function extractNumbers(formData) {
    const num1Input = formData.get('num1');
    const num2Input = formData.get('num2');

    return [num1Input, num2Input];
}

/**
 * Top level function to get the inputs entered into the DOM. This
 * wraps a lower level function that addresses the DOM elements
 * @param {*} form
 * @returns
 */
export function extractEnteredNumberValues(form) {
    const formData = new FormData(form);
    const numberInputs = extractNumbers(formData);
    return numberInputs;
}
