const express = require('express');
const router = express.Router();

// Require controller modules.
const author_controller = require('../controllers/authorController');

/// BOOK ROUTES ///
router
    .route('/')
    .get(author_controller.author_list) // get all authors

router
    .route('/create')
    .get(author_controller.author_create_get)
    .post(author_controller.author_create_post); 

router
    .route('/:id')
    .get(author_controller.author_detail)

router
    .route('/:id/delete')
    .get(author_controller.author_delete_get)
    .post(author_controller.author_delete_post)

router
    .route('/:id/update')
    .get(author_controller.author_update_get)
    .post(author_controller.author_update_post) 

module.exports = router;  