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
    .route('/create')
    .get(bookinstance_controller.bookinstance_create_get)
    .post(bookinstance_controller.bookinstance_create_post); 

router
    .route('/:id')
    .get(bookinstance_controller.bookinstance_detail)

router
    .route('/:id/delete')
    .get(bookinstance_controller.bookinstance_delete_get)
    .post(bookinstance_controller.bookinstance_delete_post)

router
    .route('/:id/update')
    .get(bookinstance_controller.bookinstance_update_get)
    .post(bookinstance_controller.bookinstance_update_post)  

module.exports = router; 