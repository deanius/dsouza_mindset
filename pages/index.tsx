import styles from "../styles/Home.module.css";
import getHeroData from "../contentful";
import Hero from "../components/Home/Hero/Hero";
import CheckIn from "../components/Home/CheckIn/CheckIn";
import Layout from "../components/Layout/Layout";
import Divide from "../components/Common/Divide/Divide";
import ContactForm from "../components/Common/ContactForm/ContactForm";
import Socials from "../components/Common/Socials/Socials";
import Scroller from "../components/Common/Scroller/Scroller";
import Activity from "../components/Home/Activity/Activity";
import { createClient } from "contentful";
import Mission from "../components/Home/Mission/Mission";

const client = createClient({
  space: "59w8420dbrn3",
  accessToken: "aKFFMQlXzNDRZ-A037aG16CYx1-lfDUIHEqWZO0_e4Y",
});

const getActivityData = async () => {
  const response = await client.getEntries({
    content_type: "activity",
    order: ["fields.id"],
  });

  return response.items;
};

const getAvatarData = async () => {
  const response = await client.getEntries({
    content_type: "avatar",
  });

  return response.items;
};

export default function Home({ hero, activity, avatar }: any) {
  return (
    <Layout
      title="The Dean Dsouza Mindset - Home"
    >
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
        <Mission/>
        <CheckIn />
        <Activity data={activity} />
        <Divide />
        <div className="formContain">
          <div className="form-inner">
            <ContactForm
              serviceId="service_f5ribc7"
              templateId="template_2upgo0k"
              userId="eGMCIdPiH-R_XjZbK"
            />
            <Socials />
          </div>
        </div>
      </div>
      <Scroller />
    </Layout>
  );
}

Home.getInitialProps = async () => {
  const hero = await getHeroData();
  const activity = await getActivityData();
  const avatar = await getAvatarData();

  return { hero, activity, avatar };
};
