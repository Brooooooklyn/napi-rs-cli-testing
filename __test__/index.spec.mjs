import test from 'ava'

import { sum } from '../index.js'

test('sum should work', (t) => {
  t.is(sum(1, 2), 3)
})
