/**
 * Function to add two numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} - The sum of the two numbers
 */
function add(a, b) {
    return a + b;
}

/**
 * Function to subtract two numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} - The difference of the two numbers
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Function to multiply two numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} - The product of the two numbers
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Function to divide two numbers
 * @param {number} a - The numerator
 * @param {number} b - The denominator
 * @returns {number} - The quotient of the two numbers
 * @throws {Error} - Throws an error if the denominator is zero
 */
function divide(a, b) {
    if (b === 0) {
        throw new Error("Error: Division by zero");
    }
    return a / b;
}

