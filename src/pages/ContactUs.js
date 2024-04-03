import React from "react";
import styles from "../styles/contact.module.css";

const ContactPage = () => {
  // Dummy contact information
  const contactInfo = {
    address: "123 Main Street, Cityville, State, Country",
    phone: "+1234567890",
    email: "contact@example.com"
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  }


  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <div className={styles.contactInfo}>
        <h2>Our Office</h2>
        <p><strong>Address:</strong> {contactInfo.address}</p>
        <p><strong>Phone:</strong> {contactInfo.phone}</p>
        <p><strong>Email:</strong> {contactInfo.email}</p>
      </div>
      <div className={styles.form}>
        <h2>Get in Touch</h2>
        <form onSubmit={onSubmitHandler} >
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4"></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
