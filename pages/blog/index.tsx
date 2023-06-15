import { GetStaticProps } from "next";
import { createClient } from "contentful";
import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Dropdown from "../../components/Common/Dropdown/Dropdown";
import styles from "../../components/Common/Posts/Posts.module.css";
import Button from "../../components/Common/Buttons/Button";

function Preview(str: string) {
  const words = str.split(" ");
  const first20Words = words.slice(0, 20);
  const joined = first20Words.join(" ");
  const stringWithoutBrTags = joined.replace(/<br>/gi, "");
  const result = stringWithoutBrTags + "...";
  return result;
}

const BlogIndex = ({
  posts,
  categories,
}: {
  posts: any[];
  categories: any;
}) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const filteredPosts = activeCategory
    ? posts.filter((post: any) => post.fields.category === activeCategory)
    : posts;

  return (
    <Layout title="The Dean Dsouza Mindset - Blog">
      <div className="blogContain">
        <h1>Blog</h1>
        <p className="subheading">
          Welcome to my blog. Here you will find my thoughts on various topics.
        </p>
        <Dropdown
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <ul className={styles.posts}>
          {filteredPosts.map((post, id) => (
            <>
              <div className={styles.post} key={id}>
                <div className={styles.titleContain}>
                  <img
                    src={post.fields.image.fields.file.url}
                    alt="Blog Image"
                  />
                  <h3>{post.fields.title}</h3>
                </div>
                <div className={styles.postContent}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: Preview(post.fields.text),
                    }}
                  />
                </div>
                <Button
                  name="Read More"
                  location={`/blog/${post.fields.slug}`}
                />
              </div>
            </>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: "59w8420dbrn3",
    accessToken: "aKFFMQlXzNDRZ-A037aG16CYx1-lfDUIHEqWZO0_e4Y",
  });
  const posts = await client.getEntries<any>({ content_type: "blogPost" });
  const categories = await client.getEntries<any>({
    content_type: "blogCategory",
  });

  return {
    props: {
      posts: posts.items,
      categories: categories.items,
    },
    revalidate: 1,
  };
};

export default BlogIndex;
