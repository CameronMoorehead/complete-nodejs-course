const moment = require("moment")

// const date = moment()
// date.add(100, "year").subtract(9, "months")
// console.log(date.format("MMM Do, YYYY"))

// 10:35 am
// 6:01 am

const date = moment()
console.log(date.format("h:mm a"))
date.subtract(1, "hours")
console.log(date.format("h:mm a"))
