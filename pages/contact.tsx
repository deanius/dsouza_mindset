import React from "react";
import Layout from "../components/Layout/Layout";
import ContactForm from "../components/Common/ContactForm/ContactForm";
import Socials from "../components/Common/Socials/Socials";

const Contact = () => {
  return (
    <Layout title="The Dean Dsouza Mindset - Contact">
      <div className="formContain">
        <h1>Get in Touch.</h1>
        <p className="subheading">Send a message or connect through socials.</p>
        <div className="form-inner">
          <ContactForm
            serviceId={process.env.EMAILJS_SERVICE_ID}
            templateId={process.env.EMAILJS_TEMPLATE_ID}
            userId={process.env.EMAILJS_USER_ID}
          />
          <Socials />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
