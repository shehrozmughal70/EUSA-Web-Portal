const nodemailer = require('nodemailer');
const Sndmail = require('../others/sendmail');

exports.sendQuery = (req, res, next) => {
    const query = req.body.issue;
    const msg = 'Thank you for your response, the support team is notified and will contact you'

    Sndmail.sendEmail('fyp.binaryforce@gmail.com', 'fyp.binaryforce@gmail.com', 'Query', query.query + '. \nCustomer email is: ' + query.email + '\n Mobile number is: '+ query.mobile );
    Sndmail.sendEmail('fyp.binaryforce@gmail.com', query.email, 'Customer Support', msg);

    res.status(200).json({ message: 'the support team is notified and will reach out to the customer' });

}
