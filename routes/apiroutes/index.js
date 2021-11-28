const express = require('express');
const router = express.Router();
const db = require('../../db/db.json');
const fs = require('fs');

const { addNewNote, deleteNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    res.json(db);
});

router.post('/notes', (req, res) => {
    // create new id  
    let newId;
    
    if (db.length){
        const lastNote = db[db.length - 1];
        const i = JSON.parse(lastNote.id);
        newId = i + 1;
    } else {
        newId = 1;
    }
    
    
    req.body.id = newId.toString();

    const result = addNewNote(req.body);
    res.json(result);
});

router.delete('/notes/:id', (req, res) => {
    const result = deleteNote(req.params.id);
    console.log(result);
    res.json(result);
})

module.exports = router;