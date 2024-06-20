/**
 * Finds the longest word in a given string.
 *
 * @param {string} input - The input string to search for the longest word.
 * @returns {string} - The longest word found in the input string.
 */
export function findLongestWord(input: string): string {
  const words = input.split(' ');
  let longestWord = '';

  for (let word of words) {
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }

  return longestWord;
}
