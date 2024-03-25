import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../assets/styles/swiper.css";

const BannerSwiper = () => {
  return (
    <>
      <Swiper
        autoplay={true}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="mt-10"></div>
        <SwiperSlide>
          <img
            src="https://www.topitop.pe/arquivos/240322_desktop_1.png?v=638467237506570000"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.topitop.pe/arquivos/240322_desktop_7.png?v=638467237567830000"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.topitop.pe/arquivos/240322_desktop_5.png?v=638467237537830000"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.topitop.pe/arquivos/240322_desktop_4.png?v=638467237554300000"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerSwiper;
