const mongoose = require("mongoose")

// use es6 promises
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost:27017/TodoApp")

module.exports = { mongoose }
