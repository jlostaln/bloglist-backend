const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')
const testList = require("./testList")

test('dummy returns one', () => {
  const blogs = testList

  const result = listHelper.dummy(blogs)
  assert.strictEqual(result, 1)
})