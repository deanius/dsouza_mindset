import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Button from "../components/Common/Buttons/Button";
import ContactForm from "../components/Common/ContactForm/ContactForm";
import Socials from "../components/Common/Socials/Socials";
import Divide from "../components/Common/Divide/Divide";
import AboutSection from "../components/About/AboutSection/AboutSection";
import { createClient } from "contentful";

const client = createClient({
  space: "59w8420dbrn3",
  accessToken: "aKFFMQlXzNDRZ-A037aG16CYx1-lfDUIHEqWZO0_e4Y",
});

const getAboutData = async () => {
  const response = await client.getEntries({
    content_type: "aboutSection",
  });

  return response.items;
};

const About = ({ about }: any) => {
  return (
    <Layout title="The Dean Dsouza Mindset - About">
      <div className="aboutText">
        <h1>About Me</h1>
        <p className="subheading">A bit about myself</p>
        {about.map((about: any) => (
          <>
            <AboutSection
              question={about.fields.question}
              answer={about.fields.answer}
              image={about.fields.image.fields.file.url}
            />
          </>
        ))}
      </div>
      <Divide />
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

About.getInitialProps = async () => {
  const about = await getAboutData();

  return { about };
};

export default About;
