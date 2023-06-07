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
    </form>
  );
};

export default ContactForm;
