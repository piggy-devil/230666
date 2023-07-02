const express = require('express');
const praController = require('../controllers/praController');
// const authController = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

// POST  /tour/636cfe26bbd141a256dd6c28/reviews
// GET  /tour/636cfe26bbd141a256dd6c28/reviews
// POST /reviews

// router.use(authController.protect);

router
  .route('/')
  .get(praController.getAllReviews)
  .post(praController.createReview);
router
  .route('/:id')
  .get(praController.getReview)
  .patch(praController.updateReview)
  .delete(praController.deleteReview);

module.exports = router;
