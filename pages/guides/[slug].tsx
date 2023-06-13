import { GetStaticPaths, GetStaticProps } from "next";
import { createClient } from "contentful";
import Layout from "../../components/Layout/Layout";
import styles from "../../components/Common/Posts/Post/Post.module.css";
import Button from "../../components/Common/Buttons/Button";

const GuidePost = ({ post }: { post: any }) => {
  const markdown = post.fields.text;

  const date = new Date(post.fields.date);
  const formattedDate = date.toISOString().split("T")[0];

  return (
    <Layout title={`The Dean Dsouza Mindset - ${post.fields.title}`}>
      <div className="blogContain">
        <div className={styles.postInfo}>
          <div>
            <h1>{post.fields.title}</h1>
            <span>{post.fields.category}</span>
            <p className={styles.name}>Dean M. Dsouza</p>
            <p className={styles.date}>Published: {formattedDate}</p>
            <Button name="Return to Guides" location="/guides"/>
          </div>

          <img src={post.fields.image.fields.file.url} alt="" />
        </div>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: markdown }} />
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient({
    space: "59w8420dbrn3",
    accessToken: "aKFFMQlXzNDRZ-A037aG16CYx1-lfDUIHEqWZO0_e4Y",
  });
  const entries = await client.getEntries<any>({ content_type: "guide" });

  const paths = entries.items.map((item: any) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = createClient({
    space: "59w8420dbrn3",
    accessToken: "aKFFMQlXzNDRZ-A037aG16CYx1-lfDUIHEqWZO0_e4Y",
  });
  const slug = params?.slug;

  if (!slug) {
    return {
      notFound: true,
    };
  }

  const entry = await client.getEntries<any>({
    content_type: "guide",
    "fields.slug": slug,
  });

  if (!entry.items.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: entry.items[0],
    },
    revalidate: 1,
  };
};

export default GuidePost;
