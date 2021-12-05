const express = require('express');
const { addNews, getAllNews, getNewsById, getSliderNews, getNewsByCategory, deleteNewsById, editNews } = require('../controllers/newsController');
const router = express.Router();
const protect = require('../middleware/authMiddleware');


router.route('/addNews').post(protect, addNews);
router.route('/getAllNews/:pageNo/:pageSize').get(getAllNews);
router.route('/getById/:newsId').get(getNewsById);
router.route('/getAllNews/slider').get(getSliderNews);
router.route('/getByCategory/:catId').get(getNewsByCategory);

router.route('/deleteNews/:newsId').delete(protect, deleteNewsById);
router.route('/editNews/:newsId').put(protect, editNews);


module.exports = router;