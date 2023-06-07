import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import GuidePost from "./GuidePost/GuidePost";

import styles from "./Guides.module.css";

const GuidesList = () => {
  return (
    <div className={styles.guides}>
      <h1>Guides</h1>
      <p className="subheading">A treasure trove of life advice.</p>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
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
