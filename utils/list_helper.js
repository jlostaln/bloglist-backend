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

const mostBlogs = (blogList) => {

  return blogList.length === 0 ? undefined : blogList.reduce((acc, blog) => {
    acc[blog.author] = (acc[blog.author] || 0) + 1

    return acc[blog.author] > acc.max.blogs
    ? {...acc, max: { author: blog.author, blogs: acc[blog.author]}}
    : acc
  }, { max: { author: null, blogs: 0}}).max

}

const mostLikes = (blogList) => {

  return blogList.length === 0 ? undefined : blogList.reduce((acc, blog) => {
    acc[blog.author] = (acc[blog.author] || 0) + blog.likes
    
    return acc[blog.author] > acc.max.likes
    ? {...acc, max: { author: blog.author, likes: acc[blog.author] }}
    : acc
  }, { max: { author: null, likes: 0 } }).max

}


module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
}