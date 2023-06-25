const sgMail = require('@sendgrid/mail');

exports.handler = async (event, context) => {
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

    return {
      statusCode: 200,
      body: 'Email sent successfully',
    };
  } catch (error) {
    console.log('Error sending email:', error);

    return {
      statusCode: 500,
      body: 'An error occurred while sending the email',
    };
  }
};
