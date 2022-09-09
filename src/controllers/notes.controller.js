const notesCrtl = {};
const Note = require('../models/Note'); 
require('dotenv').config();
//add new notes
notesCrtl.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
};

//create new notes
notesCrtl.createNewNote = (req, res) => {
    const { title, description } = req.body;
    const errors = [];	
    if(!title){
        errors.push({text: 'Please write a title'});
    }
    if(!description){
        errors.push({text: 'Please write a description'});
    }
    if(errors.length > 0){
        res.render('notes/new-note', {
            errors,
            title,
            description
        });
    }
    const newNote = new Note({ title, description });
    newNote.save();
    console.log(newNote);
    res.send('new note created');
}
;

//Render all notes
notesCrtl.renderNotes = async (req, res) => {
    const notes = await Note.find().lean();
    res.render('notes/all-notes', {notes});
};

//Edit notes
notesCrtl.renderEditForm = (req, res) => {
    res.send('render edit notes');
};

//Update notes
notesCrtl.updateNote = (req, res) => {
    res.send('update notes');
};

//Delete Notes
notesCrtl.deleteNote = (req, res) => {
    res.send('delete notes');
};

module.exports = notesCrtl;