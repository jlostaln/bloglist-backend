const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')
const testList = require("./testList")

describe('most likes', () => {
  test('from an empty list is undefined', () => {
    const result = listHelper.mostLikes([])
    assert.deepStrictEqual(result, undefined)
  })
  test('from a list of one blog is the author and number of likes', () => {
    const result = listHelper.mostLikes([ testList[0] ])
    assert.deepStrictEqual(result, { author: 'Michael Chan', likes: 7 })
  })
  test('from a bigger list is the right author and total likes', () => {
    const result = listHelper.mostLikes(testList)
    assert.deepStrictEqual(result, { author: 'Edsger W. Dijkstra', likes: 17 })
  })
})