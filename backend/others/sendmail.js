const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'fypeusa70@gmail.com',
        pass: 'Amfahhm0'
    }
});



exports.sendEmail = (from, to, subject, text) => {
    console.log("sendmail working");
    transporter.sendMail({ from, to, subject, text }, function (err, info) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('EMail sent' + info.response);
        }
    })
}