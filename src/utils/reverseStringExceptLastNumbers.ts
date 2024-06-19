/**
 * Reverses the characters in a string except for the trailing numbers.
 *
 * @param {string} input - The input string to be processed.
 * @returns {string} - The processed string with the characters reversed, except for the trailing numbers.
 *
 * @example
 * // returns "fedcba123"
 * reverseStringExceptLastNumbers("abcdef123");
 *
 * @example
 * // returns "zyx987"
 * reverseStringExceptLastNumbers("xyz987");
 */
export function reverseStringExceptLastNumbers(input: string): string {
  // Regular expression to find the trailing numbers
  const regex = /\d+$/;
  const match = input.match(regex);

  // If no trailing numbers are found, reverse the entire string
  if (!match) {
    return input.split('').reverse().join('');
  }

  // Get the part to be reversed and the trailing numbers
  const numbers = match[0];
  const partToReverse = input.slice(0, -numbers.length);

  // Reverse the part before the numbers and concatenate with the numbers
  const reversedPart = partToReverse.split('').reverse().join('');
  return reversedPart + numbers;
}

/**
 * Reverses the characters in a string except for the last char.
 *
 * @param {string} input - The input string to be processed.
 * @returns {string} - The processed string with the characters reversed, except for the last char.
 *
 * @example
 * // returns "edcba1"
 * reverseStringExceptLastChar("abcde1");
 *
 * @example
 * // returns "yxz3"
 * reverseStringExceptLastChar("zxy3");
 */
export function reverseStringExceptLastChar(input: string): string {
  // Get all characters except the last one
  const letters = input.slice(0, -1);
  // Get the last character
  const digit = input.slice(-1);

  // Reverse the letters
  const reversedLetters = letters.split('').reverse().join('');

  // Concatenate the reversed letters with the last character
  return reversedLetters + digit;
}
