import React from "react";
import Layout from "../components/Layout/Layout";
import Button from "../components/Common/Buttons/Button";
import ContactForm from "../components/Common/ContactForm/ContactForm";
import Socials from "../components/Common/Socials/Socials";

const Support = () => {
  return (
    <Layout title="The Dean Dsouza Mindset - Support">
      <h1>Support</h1>
      <div className="formContain">
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

export default Support;
