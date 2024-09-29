import assert from 'node:assert'
import { describe, it } from 'node:test'

import { add } from '../src/math.js'

describe('add', () => {
  it('should add two numbers', () => {
    assert.strictEqual(add(1, 2), 3)
  })
})
