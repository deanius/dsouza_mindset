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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      email: email,
      message: message,
      subscribe: subscription ? "Yes" : "No",
    };

    emailjs.send(serviceId, templateId, templateParams, userId).then(
      () => {
        setStatus("Message sent!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        setSubscription(false);
      },
      (error) => {
        console.error(error);
        setStatus("Failed to send message. Please try again later.");
      }
    );
  };

  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputField}>
          <label className={styles.label}>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className={styles.inputField}>
          <label className={styles.label}>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.inputField}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.inputField}>
          <label className={styles.label}>Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.input}
          ></textarea>
        </div>

        <div className={styles.radio}>
          <input
            type="radio"
            id="subscribe"
            name="subscription"
            checked={subscribed}
            onChange={() => setSubscribed(!subscribed)}
            className={styles.radioInput}
          />
          <label htmlFor="subscribe" className={styles.radioLabel}>
            Subscribe to newsletter
          </label>
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
