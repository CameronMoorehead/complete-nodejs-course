const { MongoClient, ObjectID } = require("mongodb")

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDb server")
  }

  console.log("Connected to MongoDb server")

  // deleteMany
  // db.collection("Todos")
  //   .deleteMany({
  //     text: "Eat lunch"
  //   })
  //   .then(result => console.log(result))
  //   .catch(err => console.log(err))

  // deleteOne
  // db.collection("Todos")
  //   .deleteOne({
  //     text: "Eat lunch"
  //   })
  //   .then(result => console.log(result))
  //   .catch(err => console.log(err))

  // findOneAndDelete
  // db.collection("Todos")
  //   .findOneAndDelete({
  //     completed: false
  //   })
  //   .then(result => console.log(result))
  //   .catch(err => console.log(err))

  // deleteMany camerons, findOneAndDelete by ID
  db.collection("Users")
    .deleteMany({
      name: "Cameron"
    })
    .then(result => console.log(result))
    .catch(err => console.log(err))

  db.collection("Users")
    .findOneAndDelete({
      _id: new ObjectID("597a63e4c1ef033e2931f526")
    })
    .then(result => console.log(result))
    .catch(err => console.log(err))

  // db.close()
})
