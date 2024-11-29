const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const logger = require('./utils/logger')
const mongoose = require('mongoose')
const middleware = require('./utils/middleware')
const Blog = require('./models/blog')
const blogsRouter = require('./controllers/blogs')

// todo: tehtävä 4.2 kesken: ainakin app.js

logger.info('connecting to', config.MONGODB_URI)
mongoose.connect(config.MONGODB_URI)

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)
app.use('/api/blogs', blogsRouter)


app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})