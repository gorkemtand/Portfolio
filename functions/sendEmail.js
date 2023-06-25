const sgMail = require('@sendgrid/mail');

exports.handler = async (event, context) => {
  console.log("Executing email.js");
  try {
    const { name, email, subject,message } = JSON.parse(event.body);

    // Set up SendGrid API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Compose the email
    const msg = {
      to: process.env.CONTACT_EMAIL, // Replace with your email address
      from: process.env.CONTACT_EMAIL,
      subject: subject,
      text: `Name: ${name}\nSubject: ${subject}\nEmail: ${email}\n\nMessage: ${message}`,
    };

    // Send the email
    await sgMail.send(msg);
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
