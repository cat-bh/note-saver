const db = require('../db/db.json');
const fs = require('fs');
const path = require('path');

function addNewNote(note) {
    db.push(note);
    console.log(db);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(db));

    return db;
}

module.exports = { addNewNote };