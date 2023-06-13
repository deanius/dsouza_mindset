import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import ContactForm from "../components/Common/ContactForm/ContactForm";
import Socials from "../components/Common/Socials/Socials";
import SupportButtons from "../components/Support/SupportButtons/SupportButtons";
import SupportMeButtons from "../components/Support/SupportMeButtons/SupportMeButtons";
import SupportOptions from "../components/Support/SupportOptions/SupportOptions";
import { createClient } from "contentful";

const client = createClient({
  space: "59w8420dbrn3",
  accessToken: "aKFFMQlXzNDRZ-A037aG16CYx1-lfDUIHEqWZO0_e4Y",
});

const getCreatorData = async () => {
  const response = await client.getEntries({
    content_type: "creators",
  });

  return response.items;
};

const getCharityData = async () => {
  const response = await client.getEntries({
    content_type: "charities",
  });

  return response.items;
};

const Support = ({ creators, charities }: any) => {
  const [active, setActive] = useState("creators");
  
  return (
    <Layout title="The Dean Dsouza Mindset - Support">
      <div className="supportHead">
        <h1>Support</h1>
        <p className="subheading">Creators and Charities I Support.</p>
      </div>

      <SupportButtons active={active} setActive={setActive} />
      {active === "supportMe" && <SupportMeButtons active={active} />}
      {active === "creators" && (
        <SupportOptions
          active={active}
          heading="Creators I Support"
          data={creators}
        />
      )}
      {active === "charities" && (
        <SupportOptions
          active={active}
          heading="Charities I Support"
          data={charities}
        />
      )}
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

Support.getInitialProps = async () => {
  const creators = await getCreatorData();
  const charities = await getCharityData();

  return { creators, charities };
};

export default Support;
