/**
 * Install dev-dependencies
 * npm i -D  babel-cli babel-core babel-preset-es2015 babel-preset-react babel-preset-stage-2 tap-spec tape
 * 
 * Create .babelrc file with:
 * {
 *   "presets": [
 *     "es2015",
 *     "react",
 *     "stage-2"
 *   ]
 * }
 * Replace "test" script on package.json to: "babel-node sagas.spec.js | tap-spec"
 * 
 * Try to test running `npm test` 
 */

import test from 'tape';
import { put } from 'redux-saga/effects'
import { fetchBalance } from './src/store/sagas'

test('fetchBalance generator test', (assert) => {
  const gen = fetchBalance()

  assert.deepEqual(
    gen.next().value,
    put({ type: 'FETCH_BALANCE' }),
    'fetchBalance Saga must dispatch an FETCH_BALANCE action'
  )

  assert.end()
});
