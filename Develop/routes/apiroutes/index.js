const express = require('express');
const router = express.Router();
const db = require('../../db/db.json');

const { addNewNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    res.json(db);
});

router.post('/notes', (req, res) => {
    req.body.id = db.length.toString();
    // should probably validate
    const result = addNewNote(req.body);
    res.json(result);
})

module.exports = router;