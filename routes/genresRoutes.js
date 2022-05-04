const express = require('express');
const router = express.Router();

// Require controller modules.
const genre_controller = require('../controllers/genreController');

/// BOOK ROUTES ///
router
    .route('/')
    .get(genre_controller.genre_list) // get all authors
    .post(genre_controller.genre_create_post); 

router
    .route('/:id')
    .get(genre_controller.genre_detail)

router
    .route('/:id/delete')
    .get(genre_controller.genre_delete_get)
    .post(genre_controller.genre_delete_post)

router
    .route('/:id/update')
    .get(genre_controller.genre_update_get)
    .post(genre_controller.genre_update_post)

module.exports = router; 