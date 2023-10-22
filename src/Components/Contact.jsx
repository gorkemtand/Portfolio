import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function Contact() {
  return (
    <div>
      <div className="contactHeader">
        <h1>CONTACT</h1>
        <p>Have a question or want to work together?</p>
      </div>
      <div className="contactContainer">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}

export default Contact;
