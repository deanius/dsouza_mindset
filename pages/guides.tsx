import React from "react";
import Layout from "../components/Layout/Layout";
import client from "../apolloclient";
import { useQuery, gql } from "@apollo/client";
import ReactQuill from "react-quill";

const POSTS_QUERY = gql`
  query {
  posts(where: {categoryName: "Guides"}) {
    nodes {
      id
      content
      title
    }
  }
}

`;
const Guides = () => {
  const { loading, error, data } = useQuery(POSTS_QUERY, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <Layout title="The Dean Dsouza Mindset - Guides">
      <h1>Guides</h1>
      {data.posts.nodes.map((post: any) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>
      ))}    
    </Layout>
  );
};

export default Guides;
