const nodemailer = require('nodemailer');
const Sndmail = require('../others/sendmail');

exports.sendQuery=(req,res,next)=>{
   
    const query=req.body.issue;
    Sndmail.sendEmail('','', 'Query', query);
    res.status(200).json({ message: 'the support team is notified and will reach out to the customer'});
   
}
