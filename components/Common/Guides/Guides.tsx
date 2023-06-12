import { Swiper, SwiperSlide } from "swiper/react";
import GuidePost from "./GuidePost/GuidePost";
import styles from "./Guides.module.css";

import "swiper/swiper.min.css";
import { useRef } from "react";
import Post from "../Posts/Post/Post";

const GuidesList = () => {
  const swiperRef = useRef(null);

  return (
    <div className={styles.guides}>
      <h1>Guides</h1>
      <p className="subheading">A treasure trove of life advice.</p>
      <div className={styles.guidesContent}>
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
    </div>
  );
};

export default GuidesList;
