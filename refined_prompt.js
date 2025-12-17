// Write a JavaScript function called toCamelCase that converts a string to camelCase. 
// The function should handle inputs with spaces, underscores, hyphens, and uppercase letters. 
// Include error handling: throw an error if the input is not a string or is null/undefined. 
// Trim extra spaces and ignore multiple consecutive separators. 
// For example:
// toCamelCase("first name") → "firstName"
// toCamelCase("user_id") → "userId"
// toCamelCase("SCREEN_NAME") → "screenName"
// toCamelCase("mobile-number") → "mobileNumber"
// toCamelCase(123) → throws an error

/**
 * Converts a string to camelCase format.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} - The converted string in camelCase format.
 * @throws {Error} - Throws an error if the input is not a valid string.
 *
 */

function toCamelCase(str) {
  if (typeof str !== 'string' || str === null || str === undefined) {
    throw new Error('Input must be a valid string');
  }

  return str
    .trim()
    .toLowerCase()
    .replace(/[_-\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
}

/**
 * Converts a string to dot.case format.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} - The converted string in dot.case format.
 * @throws {Error} - Throws an error if the input is not a valid string.
 */

function toDotCase(str) {
  if (typeof str !== 'string' || str === null || str === undefined) {
    throw new Error('Input must be a valid string');
  }

  return str
    .trim()                       // Remove leading/trailing spaces
    .toLowerCase()                // Convert everything to lowercase
    .replace(/[_-\s]+/g, '.');   // Replace spaces, underscores, hyphens with dots
}



