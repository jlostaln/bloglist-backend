const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')
const testList = require("./testList")

describe('most likes', () => {
  test('of an empty list is undefined', () => {
    const result = listHelper.mostLikes([])
    assert.deepStrictEqual(result, undefined)
  })
  test('when list has only one blog is the author and number of likes in that blog', () => {
    const result = listHelper.mostLikes([ testList[0] ])
    assert.deepStrictEqual(result, { author: 'Michael Chan', likes: 7 })
  })
  test('of a bigger list is the right author and total likes calculated correctly', () => {
    const result = listHelper.mostLikes(testList)
    assert.deepStrictEqual(result, { author: 'Edsger W. Dijkstra', likes: 17 })
  })
})