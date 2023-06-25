import { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./ContactForm.module.css";

type ContactFormProps = {
  serviceId: string | any;
  templateId: string | any;
  userId: string | any;
};

const ContactForm = ({ serviceId, templateId, userId }: ContactFormProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [status, setStatus] = useState("");
  const [submitted, setSubmitted] = useState(false); // Track submission status

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      email: email,
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, userId).then(
      () => {
        setStatus("Message sent!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        setSubscription(false);
        setSubmitted(true); // Set submission status to true
      },
      (error) => {
        console.error(error);
        setStatus("Failed to send message. Please try again later.");
      }
    );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Drop a message</h3>
      <div className={styles.inputField}>
        <input
          required
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className={styles.inputField}>
        <input
          required
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.inputField}>
        <input
          required
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.inputField}>
        <textarea
          required
          placeholder="Enter Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.input}
        ></textarea>
      </div>
      <button className={styles.submitButton} type="submit">Submit</button>
      {submitted && ( // Render the message if submitted is true
        <p>Thank you for reaching out. I appreciate any and all feedback. <br>I hope you have an amazing day</br></p>
      )}
    </form>
  );
};

export default ContactForm;
