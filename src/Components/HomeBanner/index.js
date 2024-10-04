import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const HomeBanner = () => {
  return (
    <div className="container mt-3">
      <div className="homeBannerSection">
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item">
              <img
                src="https://theme.hstatic.net/200000182297/1000887316/14/ms_banner_img3_master.jpg?v=1497"
                className="w-100"
                alt="banner1"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://theme.hstatic.net/200000182297/1000887316/14/hb_image1_master.jpg?v=1497"
                className="w-100"
                alt="banner2"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://theme.hstatic.net/200000182297/1000887316/14/ms_banner_img2_master.jpg?v=1497"
                className="w-100"
                alt="banner3"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeBanner;
