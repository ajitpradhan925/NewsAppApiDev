var _ = require('lodash');

const nodemailer = require('nodemailer');


var config = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'codewithajit@gmail.com',
        pass: 'Ajit@123321'
    }
};


var transporter = nodemailer.createTransport(config);

var defaultMail = {
    from: 'codewithajit925@gmail.com',
    text: 'test1 test'
}

const send = (to, subject, html) => {

    // Use default setting
    mail = _.merge({html}, defaultMail, to);

    transporter.sendMail(mail, function(error, info) {
        if (error) return console.log(error);
        console.log('mail sent', info.response);
    });
}


module.exports = {
    send
}