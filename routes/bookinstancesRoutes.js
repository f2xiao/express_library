const express = require('express');
const router = express.Router();

// Require controller modules.
const bookinstance_controller = require('../controllers/bookinstanceController');

/// BOOK ROUTES ///
router
    .route('/')
    .get(bookinstance_controller.bookinstance_list) // get all authors
    .post(bookinstance_controller.bookinstance_create_post); 

router
    .route('/:id')
    .get(bookinstance_controller.bookinstance_detail)
    .patch(bookinstance_controller.bookinstance_update_post)
    .delete(bookinstance_controller.bookinstance_delete_post);

module.exports = router; 