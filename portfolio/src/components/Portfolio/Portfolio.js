import React from "react";
import "./Portfolio.css"
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import Capture1 from "../../img/capture1.jpg"
import Capture2 from "../../img/capture2.jpg"
import Capture4 from "../../img/capture4.jpg"
import Capture5 from "../../img/capture5.jpg"

const Portfolio = () => {
    return (
        <>
            <div className="portfolio" id="Portfolio">
                
                {/* heading */}
                <span>Recent Projects</span>
                <span>Portfolio</span>

                {/* slider */}
                <Swiper 
                    spaceBetween={30}
                    slidesPerView={3}
                    grabCursor={true}
                    className="portfolio-slider"
                >
                    <SwiperSlide>
                        <img src={Capture1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Capture2} alt="" />
                    </SwiperSlide>{" "}
                    <SwiperSlide>
                        <img src={Capture4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Capture5} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Portfolio;