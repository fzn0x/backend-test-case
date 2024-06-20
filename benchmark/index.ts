import { run } from 'mitata';

import './1_reverseString.ts';
import './2_findLongestWord.ts';
import './3_findArrayMatches.ts';

await run({
  silent: false, // enable/disable stdout output
  avg: true, // enable/disable avg column (default: true)
  json: false, // enable/disable json output (default: false)
  colors: true, // enable/disable colors (default: true)
  min_max: true, // enable/disable min/max column (default: true)
  percentiles: true, // enable/disable percentiles column (default: true)
});
