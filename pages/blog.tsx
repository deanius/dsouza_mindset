import React from "react";
import Layout from "../components/Layout/Layout";
import Post from "../components/Common/Posts/Post/Post";
import styles from "../components/Common/Posts/Posts.module.css";
import ContactForm from "../components/Common/ContactForm/ContactForm";
import Socials from "../components/Common/Socials/Socials";
import Divide from "../components/Common/Divide/Divide";

const Blog = () => {
  return (
    <Layout title="The Dean Dsouza Mindset - Blog">
      <div className="blogContain">
        <h1>Blog</h1>
        <p className="subheading">
          Welcome to my blog. Here you will find my thoughts on various topics.
        </p>
        <div className={styles.posts}>
          <Post
            key={1}
            date="07/06/23"
            title="Blog Post"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. In reiciendis temporibus nesciunt cum repellendus voluptatibus!"
            img="https://cdn.britannica.com/23/120923-050-8FF29907/Nanga-Parbat.jpg"
          />
          <Post
            key={1}
            date="07/06/23"
            title="Test Blog Post"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. In reiciendis temporibus nesciunt cum repellendus voluptatibus!"
            img="https://cdn.britannica.com/23/120923-050-8FF29907/Nanga-Parbat.jpg"
          />
          <Post
            key={1}
            date="07/06/23"
            title="This is a Blog Post"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. In reiciendis temporibus nesciunt cum repellendus voluptatibus!"
            img="https://cdn.britannica.com/23/120923-050-8FF29907/Nanga-Parbat.jpg"
          />
        </div>
        <Divide/>
        <div className="formContain">
          <div className="form-inner">
            <ContactForm
              serviceId={process.env.EMAILJS_SERVICE_ID}
              templateId={process.env.EMAILJS_TEMPLATE_ID}
              userId={process.env.EMAILJS_USER_ID}
            />
            <Socials />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
