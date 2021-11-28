const db = require('../db/db.json');
const fs = require('fs');
const path = require('path');

function addNewNote(note) {
    db.push(note);
    console.log(db);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(db));

    return db;
}

function deleteNote(noteId) {
    const newList = db.filter(note => note.id !== noteId);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(newList));
    
    return newList;
}

module.exports = { addNewNote, deleteNote };