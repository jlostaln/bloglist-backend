const testList = require("../tests/testList")

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  
  return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
  return blogs.length === 0
  ? undefined 
  : blogs.reduce((max, blog) => max.likes > blog.likes ? max : blog, blogs[0])
}

const mostBlogs = (blogs) => {
  const blogCounts = blogs.reduce((acc, blog) => {
    acc[blog.author] = (acc[blog.author] || 0) + 1
    console.log(acc)
    return acc
  }, {})

  const highestBlogCount = Object.entries(blogCounts).reduce((max, item) => {
    const [author, blogs] = item
    return blogs > max.blogs ? {author, blogs} : max
  }, {author: null, blogs: 0})
  console.log(highestBlogCount)
}

mostBlogs(testList)

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
}