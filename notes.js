const fs = require('fs')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.find((note) => {
        return note.title === title
    })
    if (!duplicateNotes) {
        notes.push({
            title: title,
            body: body,
        })
        saveNotes(notes)
        console.log("Note Successfully Added.")
    }
    else {
        console.log("Similar Note Already Exist.")
    }
}

const saveNotes = (notes) => {
    const DataJSON = JSON.stringify(notes)
    fs.writeFileSync("Notes-DB.json", DataJSON)
}

const loadNotes = () => {
    try {
        const data = fs.readFileSync("Notes-DB.json")
        const strData = data.toString()
        parsedData = JSON.parse(strData)
        return parsedData
    }
    catch (e) {
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const removedNote = notes.filter((note) => {
        return note.title !== title
    })
    if (notes.length > removedNote.length) {
        saveNotes(removedNote)
        console.log("Note Removed Successfully.")
    }
    else {
        console.log("Note with title '" + title + "' does not Exist.")
    }
}

const listNote = () => {
    const notes = loadNotes()
    if (notes.length == 0) {
        console.log("No Notes Found.")
    }
    else {
        console.log("Your Notes are: ")
        notes.forEach((note) => {
            console.log(note.title)
        });
    }
}

const readNote = (title) => {
    const notes = loadNotes()

    const running = notes.find((note) => {
        return note.title === title
    })

    if (running)
    {
        console.log("Title: " + running.title)
        console.log("Body: " + running.body)
    }
    else {
        console.log("No Note Found with Such Title.")
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote,
}