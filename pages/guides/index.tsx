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

const GuideIndex = ({
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
    <Layout title="The Dean Dsouza Mindset - Guides">
      <div className="blogContain">
        <h1>Guides</h1>
        <p className="subheading">Here you will find a treasure trove of life advice, broken down into categories and listicles</p>
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
                    src={
                      post?.fields?.image?.fields.file.url
                        ? post.fields.image.fields.file.url
                        : "http://thedeandsouzamindset.ctcin.bio/upload/969041612109977.JPG"
                    }
                    alt="ok"
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
                  location={`/guides/${post.fields.slug}`}
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
  const posts = await client.getEntries<any>({ content_type: "guide" });
  const categories = await client.getEntries<any>({
    content_type: "guideCategory",
  });

  return {
    props: {
      posts: posts.items,
      categories: categories.items,
    },
    revalidate: 1,
  };
};

export default GuideIndex;
