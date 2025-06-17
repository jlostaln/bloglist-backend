const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')
const testList = require("./testList")

describe('favorite blog', () => {
  
  test ('from an empty list is undefined', () => {
    const result = listHelper.favoriteBlog([])
    assert.deepStrictEqual(result, undefined)
  })

  test('from a list of one blog is the blog itself', () => {
    const result = listHelper.favoriteBlog([testList[3]])
    assert.deepStrictEqual(result, testList[3])
  })

  test('from a bigger list is the right one', () => {
    const result = listHelper.favoriteBlog(testList)
    assert.deepStrictEqual(result, testList[2])
  })
})
