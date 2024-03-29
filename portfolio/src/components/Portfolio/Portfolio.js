import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";

// import Capture1 from "../../img/capture1.jpg";
import Capture2 from "../../img/capture2.jpg";
import pic from "../../img/pic.jpg";
import pic1 from "../../img/pic1.jpg";
import forkify from "../../img/forkify.png";
import bankapp from "../../img/bankapp.png";
import img2 from "../../img/img2.jpg";
import Screenshot from "../../img/Screenshot.png";
import screenshot2 from "../../img/screenshot2.png";
const Portfolio = () => {
  return (
    <>
      <div className="portfolio" id="Portfolio">
        <div className="bg-video">
          <img className="bg-video__content" src={img2} alt="" />
        </div>

        {/* heading */}
        <span>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider */}
        <Swiper
          effect={"flip"}
          grabCursor={true}
          pagination={true}
          navigation={true}
          modules={[EffectFlip, Pagination, Navigation]}
          className="portfolio-slider"
        >
          <SwiperSlide>
            <img src={Capture2} alt="" />
            <div className="capture-1">
              <span>A simple react todo app</span>
              <a href="https://tolujacob-todo-app.netlify.app">click here</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic} alt="" />
            <div className="capture-1">
              <span>A website built for an electrical company </span>
              <a href="https://spontaneous-nasturtium-56fd97.netlify.app">
                click here
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Screenshot} alt="" />
            <div className="capture-1">
              <span>
                An App that lets you keep track and records of places you've
                been to.
              </span>
              <a href="https://lucent-kitsune-a154b3.netlify.app">click here</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic1} alt="" />
            <div className="capture-1">
              <span>TalentPlus Assessment</span>
              <a href="https://gleeful-squirrel-99bad1.netlify.app">
                click here
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={forkify} alt="" />
            <div className="capture-1">
              <span>
                An app that contains all pizza ingredients, you can search, like
                and also bookmark your recipies.
              </span>
              <a href="http://pizzaforkify.netlify.app">click here</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={bankapp} alt="" />
            <div className="capture-1">
              <span>
                A demo bank app that lets you run transaction from a friend to
                another <br /> username: atm <br /> password: 2222
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={screenshot2} alt="" />
            <div className="capture-1">
              <span>
                This is an app that lets you keep track of your running /
                cycling / jogging activities.
              </span>
              <a href="http://bright-cuchufli-5a8ec2.netlify.app">click here</a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Portfolio;
