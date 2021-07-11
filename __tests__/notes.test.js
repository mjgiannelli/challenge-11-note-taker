// import fs
const fs = require("fs");
// import functions from /lib/notes
const {
    createNewNote,
    validateNote,
    deleteNote
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

test('delete note object using id', () => {
    let notesArray = [
        {
            title: "TODO: Delete",
            text: "Need to figure out how to delete notes",
            id: "cl68K_hWQu_HGjEbnYVz1"
        },
        {
            title: "TODO: Show Notes",
            text: "Get notes to show up on side",
            id: "7VmsEzTbk6OEh1mU5LzFS"
        },
        {
            title: "test note",
            text: "test text",
            id: "2e5C2xgvMY_iQZi3rZApT"
        }
    ];

    let deletedNoteId = '7VmsEzTbk6OEh1mU5LzFS';

    deleteNote(deletedNoteId, notesArray)

    expect(notesArray).not.toEqual(expect.arrayContaining([
        expect.objectContaining({
            id: deletedNoteId
        })
    ])
    );

})