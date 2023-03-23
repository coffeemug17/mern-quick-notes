const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');
const Note = require('../../models/note');

module.exports = {
    create,
    index
};

async function create(req, res) {
    try {
        req.body.user = req.user._id;
        const note = await Note.create(req.body);
        res.json(note);
    } catch (err) {
        res.status(400).json(err);
    }
}

function index(req, res) {
    const notes = Note.find({user: req.user._id});
    res.json(notes);
}