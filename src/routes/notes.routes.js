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

// Helpers to protect routes
const {isAuthenticated} = require('../helpers/auth');

//New Note
router.get('/notes/add', isAuthenticated, renderNoteForm);

//Create New Note
router.post('/notes/new-note', isAuthenticated, createNewNote);


//See all notes
router.get('/notes', isAuthenticated, renderNotes);


//Edit Notes
router.get('/notes/edit/:id', isAuthenticated, renderEditForm);

//Update Notes
router.put('/notes/edit/:id', isAuthenticated, updateNote);


//Delete Notes
router.delete('/notes/delete/:id', isAuthenticated, deleteNote);


//export the router
module.exports = router;