var express = require('express');
var router = express.Router();

// Require controller modules.
var book_controller = require('../controllers/bookController');

/// BOOK ROUTES ///
router
    .route('/')
    .get(book_controller.book_list) // get all books
    .post(book_controller.book_create_post); 

router
    .route('/:id')
    .get(book_controller.book_detail)
    .patch(book_controller.book_update_post)
    .delete(book_controller.book_delete_post);

module.exports = router;  