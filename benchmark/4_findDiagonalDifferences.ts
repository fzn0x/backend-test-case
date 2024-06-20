import { bench, group } from 'mitata';
import { findDiagonalDifferences } from './../src/utils/findDiagonalDifferences.ts';

group(
  {
    name: 'Algorithm 4',
    summary: false,
  },
  () => {
    bench('findDiagonalDifferences', () => {
      const result = findDiagonalDifferences([
        [1, 2, 0],
        [4, 5, 6],
        [7, 8, 9],
      ]);

      return result;
    });
  },
);
