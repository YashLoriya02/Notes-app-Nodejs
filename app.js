const notes = require("./notes.js")
const yargs = require('yargs')

yargs.command({
    command:"Add",
    describe:"Add a New Title",
    builder:{
        title:{
            describe:"Note Title",
            demandOption: true ,
            type:'string'
        },
        body:{
            describe:"Note Body",
            demandOption: true ,
            type: 'string'
        },
    },
    handler: (argv) => {
        notes.addNote(argv.title , argv.body)
    }
})

yargs.command({
    command:"List",
    describe:"List Notes",
    handler: () => {
        notes.listNote()
    }
})

yargs.command({
    command:"Remove",
    describe:"Remove Note",
    builder:{
        title:{
            describe:"Note Title",
            demandOption: true ,
            type:'string'
        },
    },
    handler: (argv) => {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:"Read",
    describe:"Read a Note",
    builder:{
        title:{
            describe:"Note Title",
            demandOption: true ,
            type:'string'
        },
    },
    handler: (argv) => {
        notes.readNote(argv.title)
    }
})

yargs.parse()