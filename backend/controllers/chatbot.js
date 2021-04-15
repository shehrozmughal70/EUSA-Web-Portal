const nodemailer = require('nodemailer');
const Sndmail = require('../others/sendmail');

exports.sendQuery = (req, res, next) => {
    const query = req.body.issue;
    const msg = 'Thank you for your response, the support team is notified and will contact you'

    Sndmail.sendEmail('fypeusa70@gmail.com', 'fypeusa70@gmail.com', 'Query', query.query + '. \nCustomer email is: ' + query.email + '\nMobile number is: ' + query.mobile);
    Sndmail.sendEmail('fypeusa70@gmail.com', query.email, 'Customer Support', msg);

    res.status(200).json({ message: 'the support team is notified and will reach out to the customer' });

}
