const express = require('express');
const router = express.Router();

// Require controller modules.
const author_controller = require('../controllers/authorController');

/// BOOK ROUTES ///
router
    .route('/')
    .get(author_controller.author_list) // get all authors
    .post(author_controller.author_create_post); 

router
    .route('/:id')
    .get(author_controller.author_detail)
    .patch(author_controller.author_update_post)
    .delete(author_controller.author_delete_post);

module.exports = router;  