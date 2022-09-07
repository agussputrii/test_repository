const { Router } = require('express');
const router = Router();

//const to require the controllers
const { renderIndex, renderAbout } = require('../controllers/index.controller');

//Router to render the index page
router.get('/', renderIndex);
//Router to render the about page
router.get('/about', renderAbout);


//export the router
module.exports = router;