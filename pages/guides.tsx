import React from "react";
import Layout from "../components/Layout/Layout";
import client from "../apolloclient";
import { useQuery, gql } from "@apollo/client";
import styles from "../components/Common/Posts/Posts.module.css";
import Post from "../components/Common/Posts/Post/Post";

const POSTS_QUERY = gql`
  query {
  posts(where: {categoryName: "Guides"}) {
    nodes {
      id
      content
      excerpt
      featuredImage {
          node {
            sourceUrl
          }
        }
      title
      date
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
      <p>A treasure trove of life advice.</p>
      <div className={styles.posts}>
        {data.posts.nodes.map((post: any) => (
          <Post
            key={post.id}
            title={post.title}
            date={post.date}
            content={post.excerpt}
            img={post.featuredImage?.node?.sourceUrl}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Guides;
