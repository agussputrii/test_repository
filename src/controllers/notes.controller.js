const notesCrtl = {};
const Note = require('../models/Note'); 

//add new notes
notesCrtl.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
};

//create new notes
notesCrtl.createNewNote = (req, res) => {
    console.log(req, body)
    res.send('new note created');
}
;

//Render all notes
notesCrtl.renderNotes = async (req, res) => {
    const notes = await Note.find()
    res.render('notes/all-notes', { notes });
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