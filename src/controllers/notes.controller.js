const notesCrtl = {};

notesCrtl.renderNoteForm = (req, res) => {
    res.send('note add');
};

notesCrtl.createNewNote = (req, res) => {
    res.send('new note');
};

//Render all notes
notesCrtl.renderNotes = (req, res) => {
    res.send('render notes');
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