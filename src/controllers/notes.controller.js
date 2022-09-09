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
    req.flash('success_msg', 'Note Added Successfully');
    res.redirect('/notes');
}
;

//Render all notes
notesCrtl.renderNotes = async (req, res) => {
    const notes = await Note.find().lean();
    res.render('notes/all-notes', {notes});
};

//Edit notes
notesCrtl.renderEditForm = async (req, res) => {
    const note = await Note.findById(req.params.id).lean();
    console.log(note);
    res.render('notes/edit-note', { note });
};

//Update notes
notesCrtl.updateNote = async (req, res) => {
    const { title, description } = req.body;
    await Note.findByIdAndUpdate(req.params.id, req.body, {title, description});
    req.flash('success_msg', 'Note Updated Successfully');
    res.redirect('/notes');
};

//Delete Notes
notesCrtl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id)
    req.flash('success_msg', 'Note Deleted Successfully');
    res.redirect('/notes');
};

module.exports = notesCrtl;