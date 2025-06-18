const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')
const testList = require("./testList")

describe('most blogs', () => {
  test('of an empty list is undefined', () => {
    const result = listHelper.mostBlogs([])
    assert.deepStrictEqual(result, undefined)
  })
  test('when list has only one blog is the author and count of 1', () => {
    const result = listHelper.mostBlogs([ testList[0] ])
    assert.deepStrictEqual(result, { author: 'Michael Chan', blogs: 1 })
  })
  test('of a bigger list is the right author and correct count', () => {
    const result = listHelper.mostBlogs(testList)
    assert.deepStrictEqual(result, { author: 'Robert C. Martin', blogs: 3 })
  })
})