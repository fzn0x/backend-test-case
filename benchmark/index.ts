import { run } from 'mitata';

import './1_reverseString';
import './2_findLongestWord';
import './3_findArrayMatches';
import './4_findDiagonalDifferences';

await run({
  silent: false, // enable/disable stdout output
  avg: true, // enable/disable avg column (default: true)
  json: false, // enable/disable json output (default: false)
  colors: true, // enable/disable colors (default: true)
  min_max: true, // enable/disable min/max column (default: true)
  percentiles: true, // enable/disable percentiles column (default: true)
});
