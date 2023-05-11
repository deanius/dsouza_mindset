import React from "react";
import Layout from "../components/Layout/Layout";
import client from "../apolloclient";
import { useQuery, gql } from "@apollo/client";
import Post from "../components/Common/Posts/Post/Post";
import styles from "../components/Common/Posts/Posts.module.css";

const POSTS_QUERY = gql`
  query {
    posts(where: { categoryName: "Blog" }) {
      nodes {
        id
        date
        content
        excerpt
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
        date
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
      <p>
        Welcome to my blog. Here you will find my thoughts on various topics.
      </p>
      <div className={styles.posts}>
        {data.posts.nodes.map((post: any) => (
          <Post
            key={post.id}
            date={post.date}
            title={post.title}
            content={post.excerpt}
            img={post.featuredImage?.node?.sourceUrl}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Blog;
