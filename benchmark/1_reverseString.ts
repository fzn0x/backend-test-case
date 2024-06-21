import { bench, group } from 'mitata';
import {
  reverseStringExceptLastChar,
  reverseStringExceptLastNumbers,
} from './../src/utils/reverseStringExceptLastNumbers';

group(
  {
    name: 'Algorithm 1',
    summary: false,
  },
  () => {
    bench('reverseStringExceptLastNumbers', () => {
      const result = reverseStringExceptLastNumbers('NEGIE111');

      return result;
    });
    bench('reverseStringExceptLastChar', () => {
      const result = reverseStringExceptLastChar('NEGIE1');

      return result;
    });
  },
);
