import { Swiper, SwiperSlide } from "swiper/react";
import GuidePost from "./GuidePost/GuidePost";
import styles from "./Guides.module.css";

import "swiper/swiper.min.css";
import { useRef } from "react";

const GuidesList = () => {
  const swiperRef = useRef(null);

  return (
    <div className={styles.guides}>
      <h1>Guides</h1>
      <p className="subheading">A treasure trove of life advice.</p>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        ref={swiperRef}
        className="swiper-container"
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
