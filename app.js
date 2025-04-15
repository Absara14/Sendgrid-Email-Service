
require('dotenv').config();
const sgMail= require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
    to:"abs@gmail.com",
    from: process.env.SENDER_EMAIL,
    subject:"Sending with SendGrid",
    text:"Hello From Sendgrid",
    html:"<strong>Hello From Sendgrid</strong>",
}

sgMail.send(msg)
.then(() => {
    console.log("Email sent successfully");
})
.catch((error) => {
    console.error("Error sending email:", error);
});

