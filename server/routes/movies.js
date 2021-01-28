const express = require('express');
const router = express.Router();
const movieControll = require('../controllers/movie');

router.get('/',movieControll.getMovies);
router.post('/',movieControll.createMovie);
router.get('/:id', movieControll.getMovie);
router.put('/:id', movieControll.updateMovie);
router.delete('/id', movieControll.deleteMovie);

module.exports = router;
