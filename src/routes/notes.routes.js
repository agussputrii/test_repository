const {
    Router
} = require('express');

const router = Router();

//CRUD Notes
const {
    renderNoteForm,
    createNewNote,
    renderNotes,
    renderEditForm,
    updateNote,
    deleteNote
} = require('../controllers/notes.controller');

//New Note
router.get('/notes/add', renderNoteForm);

//Create New Note
router.post('/notes/new-note', createNewNote);


//See all notes
router.get('/notes', renderNotes);


//Edit Notes
router.get('/notes/edit/:id', renderEditForm);

//Update Notes
router.put('/notes/edit/:id', updateNote);


//Delete Notes
router.delete('/notes/delete/:id', deleteNote);


//export the router
module.exports = router;