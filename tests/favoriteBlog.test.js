const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')
const testList = require("./testList")

describe('favorite blog', () => {
  
  test ('of an empty list is undefined', () => {
    const result = listHelper.favoriteBlog([])
    assert.deepStrictEqual(result, undefined)
  })

  test('when list has only one blog is the blog itself', () => {
    const result = listHelper.favoriteBlog([testList[3]])
    assert.deepStrictEqual(result, testList[3])
  })

  test('of a bigger list is the one with most likes', () => {
    const result = listHelper.favoriteBlog(testList)
    assert.deepStrictEqual(result, testList[2])
  })
})
