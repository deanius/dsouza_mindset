import React from "react";
import Layout from "../components/Layout/Layout";
import ContactForm from "../components/Common/ContactForm/ContactForm";
import Socials from "../components/Common/Socials/Socials";

const Contact = () => {
  return (
    <Layout title="The Dean Dsouza Mindset - Contact">
      <div className="contactPage">
        <div className="formContain">
          <h1>Get in Touch.</h1>
          <p className="subheading">
            Send a message or connect through socials.
          </p>
          <div className="form-inner">
            <ContactForm
              serviceId="service_f5ribc7"
              templateId="template_2upgo0k"
              userId="eGMCIdPiH-R_XjZbK"
            />
            <Socials />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
