import React from "react";
import Slider from "react-slick";

const HomeBanner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true
  };

  return (
    <div className="homeBannerSection">
      <Slider {...settings}>
        <div className="item">
            <img src="https://theme.hstatic.net/200000182297/1000887316/14/ms_banner_img3_master.jpg?v=1497" className="w-100" alt="banner1" />
        </div>
        <div className="item">
            <img src="https://theme.hstatic.net/200000182297/1000887316/14/hb_image1_master.jpg?v=1497" className="w-100" alt="banner2" />
        </div>
        <div className="item">
            <img src="https://theme.hstatic.net/200000182297/1000887316/14/ms_banner_img2_master.jpg?v=1497" className="w-100" alt="banner3" />
        </div>
      </Slider>
    </div>
  );
};

export default HomeBanner;
