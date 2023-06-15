import { GetStaticPaths, GetStaticProps } from "next";
import { createClient } from "contentful";
import Layout from "../../components/Layout/Layout";
import styles from "../../components/Common/Posts/Post/Post.module.css";
import Button from "../../components/Common/Buttons/Button";
import { marked } from "marked";

const BlogPost = ({ post }: { post: any }) => {
  const markdown = post.fields.text;
  const html = marked(markdown);

  const date = new Date(post.fields.date);
  const formattedDate = date.toISOString().split("T")[0];

  return (
    <Layout title={`The Dean Dsouza Mindset - ${post.fields.title}`}>
      <div className="blogContain">
        <div className={styles.postInfo}>
          <div>
            <h2>{post.fields.title}</h2>
            <span>{post.fields.category}</span>
            <p className={styles.date}>Published: {formattedDate}</p>
            <Button name="Return to Posts" location="/blog" />
          </div>

          <img
            src={
              post?.fields?.image?.fields.file.url
                ? post.fields.image.fields.file.url
                : "http://thedeandsouzamindset.ctcin.bio/upload/969041612109977.JPG"
            }
            alt=""
          />
        </div>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient({
    space: "59w8420dbrn3",
    accessToken: "aKFFMQlXzNDRZ-A037aG16CYx1-lfDUIHEqWZO0_e4Y",
  });
  const entries = await client.getEntries<any>({ content_type: "blogPost" });

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
    content_type: "blogPost",
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

export default BlogPost;
