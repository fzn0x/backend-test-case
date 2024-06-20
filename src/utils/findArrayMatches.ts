/**
 * Finds the number of matches for each query string in the input array O(n2).
 *
 * @param {string[]} [input=[]] - The input array of strings to search within.
 * @param {string[]} [query=[]] - The array of query strings to search for in the input array.
 * @returns {number[]} - An array of counts where each count represents the number of occurrences of the corresponding query string in the input array.
 */
export function findArrayMatches(
  input: string[] = [],
  query: string[] = [],
): number[] {
  const result = new Array(query.length).fill(0);

  // TODO: O(n^2), is there any O(n + m) alternatives?
  for (let i in query) {
    let count = 0;

    for (let n of input) {
      if (n === query[i]) {
        count += 1;
      }
    }

    result[i] = count;
  }

  return result;
}

/**
 * Finds the number of matches for each query string in the input array o(n + m).
 *
 * @param {string[]} [input=[]] - The input array of strings to search within.
 * @param {string[]} [query=[]] - The array of query strings to search for in the input array.
 * @returns {number[]} - An array of counts where each count represents the number of occurrences of the corresponding query string in the input array.
 */
export function mapArrayMatches(
  input: string[] = [],
  query: string[] = [],
): number[] {
  const result = new Array(query.length).fill(0);
  const map = new Map<string, number>();

  for (let n of input) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  for (let i in query) {
    result[i] = map.get(query[i]) || 0;
  }

  return result;
}
