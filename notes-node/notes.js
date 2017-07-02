console.log("Starting notes.js")

const fs = require("fs")

let addNote = (title, body) => {
  console.log("Adding note", title, body);
  let note = {
    title,
    body
  }
  console.log(note)
  fs.writeFile(`./notes/${title}.txt`, body, (err) => {
    if (err) throw err
    console.log(`File ${title} has been added`);
  })
}

let getAllNotes = () => {
  console.log("Getting all notes...")
  fs.readdir("./notes", "utf8", (err, notes) => {
    if (err) throw err
    console.log("All notes");
    notes.forEach(note => {
      readNote(note)
    })
  })
}

let readNote = (title) => {
  fs.readFile(`./notes/${title}`, "utf8", (err, note) => {
    if (err) throw err
    console.log(`${title}`)
    console.log(note)
  })
}

let removeNote = (title) => {
  console.log("Removing note", title)
  fs.unlink(`./notes/${title}.txt`, (err) => {
    if (err) throw err
    console.log(`Successfully deleted ${title}`)
  })
}

module.exports = {
  addNote,
  getAllNotes,
  readNote,
  removeNote
}
