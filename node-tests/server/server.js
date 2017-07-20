const express = require("express")

let app = express()

app.get("/", (req, res) => {
  res.status(404).send({
    error: "Page not found.",
    name: "Todo App v1.0"
  })
})

app.get("/users", (req, res) => {
  res.send([
    {
      name: "Cameron",
      age: 26
    },
    {
      name: "Alycia",
      age: 27
    },
    {
      name: "Bentley",
      age: 8
    }
  ])
})

app.listen(3000)
module.exports.app = app
