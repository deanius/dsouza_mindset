import React from "react";
import Layout from "../components/Layout/Layout";
import client from "../apolloclient";
import { useQuery, gql } from "@apollo/client";
import Button from "../components/Common/Buttons/Button";

const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;

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

const About = () => {
  const { loading, error, data } = useQuery(POSTS_QUERY, { client });

  return (
    <Layout title="The Dean Dsouza Mindset - About">
      <h1>About</h1>
      <ReactQuill
        value={data?.pages?.edges[2].node.content}
        readOnly={true}
        modules={{ toolbar: false }}
      />
      <Button name="View Blog" location="/blog" />
    </Layout>
  );
};

export default About;
