'use strict';
const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
module.exports = nodemailer.createTestAccount((err, account) => {
    if(err){
        console.log(err);
    }
    console.log(account)

    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        name: account.web,
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure, // true for 465, false for other ports
        auth: {
            user: account.user, // generated ethereal user
            pass: account.pass  // generated ethereal password
        },
        from: 'NEOVEG <no-reply@neoveg.com>',  // sender info
        // logger: true,
        debug: true
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"NEOVEG" <no-reply@neoveg.com>', // sender address
        to: 'brian.dunams@yahoo.com', // list of receivers
        subject: 'Welcome to NEOVEG', // Subject line
        text: 'Hello world?', // plain text body
        html: '<h1>Welcome to NEOVEG</h1>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});
