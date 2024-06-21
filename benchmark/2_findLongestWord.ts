import { bench, group } from 'mitata';
import { findLongestWord } from './../src/utils/findLongestWord';

group(
  {
    name: 'Algorithm 2',
    summary: false,
  },
  () => {
    bench('findLongestWord', () => {
      const result = findLongestWord(
        'Saya sangat senang mengerjakan soal algoritma',
      );

      return result;
    });
  },
);
