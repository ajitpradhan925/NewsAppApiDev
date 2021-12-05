const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db');
const userRoute = require('./routes/userRoute');
const categoryRoute = require('./routes/categoryRoute');
const newsRoute = require('./routes/newsRoute');
const formData = require('express-form-data');

require('dotenv').config();
require('colors');


connectDB();

const app = express();

if (process.env.NODE_ENV === 'development')
    app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(formData.parse());

app.use('/api/users', userRoute);
app.use('/api/category', categoryRoute);
app.use('/api/news', newsRoute);


app.get('*', function (req, res) {
    console.log('Enpoint does not exist.');
    res.status(404).send('Enpoint does not exist.');
});

const PORT = process.env.PORT || 3000;

app.listen(
    PORT,
    console.log(`Server is connected in ${process.env.NODE_ENV} mode on port ${PORT}`.red)
);