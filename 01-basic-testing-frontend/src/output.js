/**
 * generates the text that will be output.
 * @param {*} calculationResult
 * @returns `string`
 */
export function generateResultText(calculationResult) {
    let resultText = '';

    if (calculationResult === 'invalid') {
        resultText = 'Invalid input. You must enter valid numbers.';
    } else if (calculationResult !== 'no-calc') {
        resultText = 'Result: ' + calculationResult;
    }
    return resultText;
}

/**
 * Sets the textContent property of a DOM element to reflect
 * the feedback / result to be indicated to the user
 * @param {*} resultText
 */
export function outputResult(resultText) {
    const output = document.getElementById('result');
    output.textContent = resultText;
}
