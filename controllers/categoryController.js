const Category = require('../models/CategoryModel');

// @desc Add Catgory
const addCategory = async (req, res, next) => {
    try {
        const { category_name } = req.body;

        const category = await Category.findOne({ category_name: category_name });

        if (category) {
            return res.status(401).json({
                success: false,
                msg: 'Category already exists'
            });
        }

        const new_category = await Category.create({ category_name });

        res.status(201).json({
            success: true,
            msg: 'Category created',
            data: new_category
        });
    } catch (error) {

        res.status(500).json({
            success: false,
            msg: 'Internal error occured.'
        });
    }
};



// @desc Get All Categories
const getAllCategories = async (req, res, next) => {
    try {
        const categories = await Category.find({});
        res.json({
            success: true,
            data: categories
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Internal error occured.'
        });
    }
};


// @desc Delete a Category
const deleteCategory = async (req, res, next) => {
    try {

        const category = await Category.findByIdAndDelete(req.params.catId);

        res.status(201).json({
            success: true,
            msg: 'Successfully Deleted',
            data: category
        });

        if (!category) {
            return res.status(401).json({
                success: false,
                msg: 'Category not found'
            });
        }
        
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Internal error occured.'
        });
    }
}


// @desc Update Category
const editCategory = async (req, res, next) => {
    try {
       
        const category = await Category.findByIdAndUpdate(req.params.catId, req.body, {
            new: true,
            runValidators: true
        });

        res.status(201).json({
            success: true,
            msg: 'Successfully Updated',
            data: category
        });

        if (!category) {
            return res.status(401).json({
                success: false,
                msg: 'Category not found'
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: 'Internal error occured.'
        });
    }
};


module.exports = {
    addCategory,
    getAllCategories,
    deleteCategory,
    editCategory
};