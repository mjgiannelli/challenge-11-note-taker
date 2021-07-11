// import fs 
const fs = require("fs");
// import path
const path = require("path");

// create a function to create a new note
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ db: notesArray }, null, 2)
    );
    return note;
}
// create a function to find a note by ID
// create a function to validate the note input

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text ||typeof note.text !== 'string') {
        return false;
    }
    return true;
}

// export functions

module.exports = {
    createNewNote,
    validateNote
};