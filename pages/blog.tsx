import React from "react";
import Layout from "../components/Layout/Layout";
import client from "../apolloclient";
import { useQuery, gql } from "@apollo/client";

const POSTS_QUERY = gql`
  query {
    posts {
      nodes {
        id
        title
        content
      }
    }
  }
`;

const Blog = () => {
  const { loading, error, data } = useQuery(POSTS_QUERY, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Layout title="The Dean Dsouza Mindset - Blog">
      <h1>Blog</h1>
      {data.posts.nodes.map((post: any) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>
      ))}   
    </Layout>
  );
};

export default Blog;
