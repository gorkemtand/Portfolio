const sgMail = require('@sendgrid/mail');

exports.handler = async (event, context) => {
  console.log("Executing email.js");
  try {
    const { name, email, message } = JSON.parse(event.body);

    // Set up SendGrid API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Compose the email
    const msg = {
      to: process.env.CONTACT_EMAIL, // Replace with your email address
      from: email,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
    };

    // Send the email
    await sgMail.send(msg);
    console.log(process.env.SENDGRID_API_KEY);
    console.log(process.env.CONTACT_EMAIL);
    return {
      statusCode: 200,
      body: JSON.stringify({message: 'Email sent successfully'}),
    };
  } catch (error) {
    console.log('Error sending email:', error);

    return {
      statusCode: 500,
      body: 'An error occurred while sending the email',
    };
  }
};
