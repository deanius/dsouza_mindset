import React from "react";
import Layout from "../components/Layout/Layout";
import Button from "../components/Common/Buttons/Button";
import client from "../apolloclient";
import { useQuery, gql } from "@apollo/client";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

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
  console.log(data?.pages?.edges[0].node.title);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Layout title="The Dean Dsouza Mindset - Home">
      <h1>{data?.pages?.edges[0].node.title}</h1>
      <ReactQuill
        value={data?.pages?.edges[0].node.content}
        readOnly={true}
        modules={{ toolbar: false }}
      />
      <Button name="View Blog" location="/blog" />
    </Layout>
  );
};

export default Home;
