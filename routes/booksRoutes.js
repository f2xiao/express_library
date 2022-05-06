var express = require('express');
var router = express.Router();

// Require controller modules.
var book_controller = require('../controllers/bookController');

/// BOOK ROUTES ///
router
    .route('/')
    .get(book_controller.book_list) // get all books

router
    .route('/create')
    .get(book_controller.book_create_get)
    .post(book_controller.book_create_post); 

router
    .route('/:id')
    .get(book_controller.book_detail)

router
    .route('/:id/delete')
    .get(book_controller.book_delete_get)
    .post(book_controller.book_delete_post)

router
    .route('/:id/update')
    .get(book_controller.book_update_get)
    .post(book_controller.book_update_post)    

module.exports = router;  