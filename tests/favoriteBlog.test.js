const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')
const testList = require("./testList")

describe('favorite blogs', () => {
  
  test('from bigger list', () => {
    const result = listHelper.favoriteBlog(testList)
    assert.deepStrictEqual(result, testList[2])
  })
})
