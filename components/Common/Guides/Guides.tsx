import { Swiper, SwiperSlide } from 'swiper/react';
import GuidePost from "./GuidePost/GuidePost";
import styles from "./Guides.module.css";

import "swiper/swiper.min.css";

const GuidesList = () => {
  return (
    <div className={styles.guides}>
      <h1>Guides</h1>
      <p className="subheading">A treasure trove of life advice.</p>
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      >
        <SwiperSlide>
          <GuidePost />
        </SwiperSlide>
        <SwiperSlide>
          <GuidePost />
        </SwiperSlide>
        <SwiperSlide>
          <GuidePost />
        </SwiperSlide>
        <SwiperSlide>
          <GuidePost />
        </SwiperSlide>
        <SwiperSlide>
          <GuidePost />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default GuidesList;
