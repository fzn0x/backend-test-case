import { bench, group } from 'mitata';
import {
  findArrayMatches,
  mapArrayMatches,
} from './../src/utils/findArrayMatches.ts';

group(
  {
    name: 'Algorithm 3',
    summary: false,
  },
  () => {
    bench('findArrayMatches', () => {
      const result = findArrayMatches(
        ['xc', 'dz', 'bbb', 'dz'],
        ['bbb', 'ac', 'dz'],
      );

      return result;
    });

    bench('mapArrayMatches', () => {
      const result = mapArrayMatches(
        ['xc', 'dz', 'bbb', 'dz'],
        ['bbb', 'ac', 'dz'],
      );

      return result;
    });
  },
);
