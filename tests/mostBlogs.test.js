const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')
const testList = require("./testList")

describe('most blogs', () => {
  test('testing', () => {
   console.log(listHelper(listHelper.mostBlogs(testList)))
  })
})