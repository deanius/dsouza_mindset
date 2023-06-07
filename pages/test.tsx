import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Home/Hero/Hero";
import Socials from "../components/Common/Socials/Socials";
import ContactForm from "../components/Common/ContactForm/ContactForm";
import Activity from "../components/Home/Activity/Activity";
import CheckIn from "../components/Home/CheckIn/CheckIn";
import Divide from "../components/Common/Divide/Divide";

const Test = () => {
  return (
    <Layout title="The Dean Dsouza Mindset - Portfolio">
      <Hero />
      <CheckIn />
      <Activity />
      <Divide/>
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

export default Test;
