import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Button from "../components/Common/Buttons/Button";
import client from "../apolloclient";
import { useQuery, gql } from "@apollo/client";

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

const Home = () => {
  const { loading, error, data } = useQuery(POSTS_QUERY, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Layout title="The Dean Dsouza Mindset - Home">
      <div className="heroContain">
        <h1>{data?.pages?.edges[2].node.title}</h1>
        <p>Mission statement. Currently static and will replace.</p>
        <div className="heroBtnContain">
          <Button name="About Me" location="/about" />
          <Button name="View Blog" location="/blog" />
        </div>
      </div>
        <ReactQuill
          value={data?.pages?.edges[1].node.content}
          readOnly={true}
          modules={{ toolbar: false }}
        />
    </Layout>
  );
};

export default Home;
