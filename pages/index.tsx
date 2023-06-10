import styles from "../styles/Home.module.css";
import getHeroData from "../contentful";
import getActivityData from "../contentful";
import Hero from "../components/Home/Hero/Hero";
import CheckIn from "../components/Home/CheckIn/CheckIn";
import Layout from "../components/Layout/Layout";
import { useEffect } from "react";
import Divide from "../components/Common/Divide/Divide";
import ContactForm from "../components/Common/ContactForm/ContactForm";
import Socials from "../components/Common/Socials/Socials";

export default function Home({ hero, activity }: any) {
  useEffect(() => {}, [activity]);

  return (
    <Layout title="The Dean Dsouza Mindset - Home">
      <div className={styles.main}>
        {hero.map((hero: any) => (
          <>
            <Hero
              title={hero.fields.title}
              statement={hero.fields.missionStatement}
              img={hero.fields.heroImage.fields.file.url}
            />
          </>
        ))}
        {activity.map((item: any) => (
          <>
            {console.log(item)}
            <h2>{item.fields.name}</h2>
          </>
        ))}
        <CheckIn />
        <Divide />
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
}

Home.getInitialProps = async () => {
  const hero = await getHeroData();
  const activity = await getActivityData();

  return { activity, hero };
};
