const express = require('express');
const { addCategory, deleteCategory, getAllCategories, editCategory } = require('../controllers/categoryController');
const router = express.Router();
const protect = require('../middleware/authMiddleware');


router.route('/addCategory').post(protect, addCategory);
router.route('/deleteCategory/:catId').delete(protect, deleteCategory);
router.route('/getAllCat').get(getAllCategories);
router.route('/editCategory/:catId').put(protect, editCategory);


module.exports = router;