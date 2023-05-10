import React from "react";
import Layout from "../components/Layout/Layout";
import ContactForm from "../components/Common/ContactForm/ContactForm";

const Contact = () => {
  return (
    <Layout title="The Dean Dsouza Mindset - Contact">
      <h1>Contact</h1>
      <ContactForm
        serviceId={process.env.EMAILJS_SERVICE_ID}
        templateId={process.env.EMAILJS_TEMPLATE_ID}
        userId={process.env.EMAILJS_USER_ID}
      />
    </Layout>
  );
};

export default Contact;
