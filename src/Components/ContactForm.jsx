import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

function ContactForm({ displayNotification }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        swal("Email successfully sent!", "", "success");
      } else {
        swal("Error sending email", "", "error");
        console.error("Error sending email:", response.status);
      }
    } catch (error) {
      swal("Error sending email", "", "error");
      console.error("Error sending email:", error);
    }
  };
  

  return (
    <form method="POST" className="contactForm" onSubmit={handleSubmit}>
    <input type="hidden" name="form-name" value="contact" />
      <div className="formDiv">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          autoComplete="on"
          required
        />
      </div>
      <div className="formDiv">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="on"
          required
        />
      </div>
      <div className="formDiv">
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div className="formDiv">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Send Email</button>
    </form>
  );
}

export default ContactForm;
