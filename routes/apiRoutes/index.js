// import functions from /lib/notes
const { createNewNote, validateNote } = require('../../lib/notes');
//import nano ID
const { nanoid } = require('nanoid');
// import data from /db/db
const { db } = require('../../db/db');
// import express.Router
const router = require('express').Router();
// create get and post route for /notes

router.get('/notes', (req, res) => {
    let results = db;
    res.json(results);
});

router.post('/notes', (req, res) => {
    //code to create unique Id for each note
    req.body.id = nanoid();
    // if any data in req.body is incorrect, send 400 error back
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted or missing information.');
    } else {
        // add note to json file and notes array in this function
        const note = createNewNote(req.body, db);
        res.json(note);
    }
})

// export router
module.exports = router;
