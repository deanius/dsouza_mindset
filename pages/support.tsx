import React from "react";
import Layout from "../components/Layout/Layout";
import client from "../apolloclient";
import { useQuery, gql } from "@apollo/client";
import Button from "../components/Common/Buttons/Button";
import ContactForm from "../components/Common/ContactForm/ContactForm";
import Socials from "../components/Common/Socials/Socials";

const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;

const POSTS_QUERY = gql`
  query {
    pages {
      edges {
        node {
          title
          content(format: RENDERED)
        }
      }
    }
  }
`;

const Support = () => {
  const { loading, error, data } = useQuery(POSTS_QUERY, { client });

  return (
    <Layout title="The Dean Dsouza Mindset - Support">
      <h1>Support</h1>
      <ReactQuill
        value={data?.pages?.edges[0].node.content}
        readOnly={true}
        modules={{ toolbar: false }}
      />
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
