// import fs
const fs = require("fs");
// import functions from /lib/notes
const {
    createNewNote,
    validateNote
} = require('../lib/notes.js')
// import data from /db/db
const { db } = require("../db/db");
// mock (fs)
jest.mock('fs');
// create tests for the functions in /lib/notes

test('creates a note object', () => {
    const note = createNewNote(
        { title: 'Test Title', id: 'abc', text: 'Test Text' },
        db
    );

    expect(note.title).toBe('Test Title');
    expect(note.id).toBe('abc');
    expect(note.text).toBe('Test Text');
})

test('validates note text', () => {
    const notes = {
        title: 'Test Title',
        text: 'Test Text'
    };

    const invalidNotes = {
        title: 'Test Title',
    };

    const result = validateNote(notes);
    const result2 = validateNote(invalidNotes);

    expect(result).toBe(true);
    expect(result2).toBe(false);
})