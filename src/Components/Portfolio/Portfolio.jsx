import React, { useContext }  from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Gluegun from '../../img/glue_gun.png';
import Purepower from '../../img/pure_power.png';
import Conventioncenter from '../../img/weeding.png';
import Stopwatch from '../../img/stop_watch.png';
import Financemaster from '../../img/finance_master.png';

import { themecontext } from "../../Context";
import { Link } from "react-scroll";
const Portfolio = () => { 
  const theme = useContext(themecontext);
  const darkmode = theme.state.darkmode;
  return (
    <div className="portfolio" name="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <span style={{color: darkmode? "#fff" : ""}} className="pheadone">Recent Projects</span><br />
            <span className="pheadtwo">Portfolio</span>
          </div> 
        </div>

        <div className="row">
          <div className="col-md-12 slider">
                <Swiper
              spaceBetween={30}
              slidesPerView={3}
              grabCursor={true}
              className="portfolio-slider"
            >
              <Link href="www.google.com" target="_blank">
              <SwiperSlide>
                <a href="https://glue-gun-client-side.web.app/" target="_blank" rel="noreferrer">
                <img src={Gluegun} alt="Gluegun" />
                </a>
              </SwiperSlide>fss
              </Link>
              <SwiperSlide>
              <a href="https://pure-power-6c1e2.web.app/" target="_blank" rel="noreferrer">
                <img src={Purepower} alt="Purepower" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
               <a href="https://kabir-convention-center.netlify.app/" target="_blank" rel="noreferrer">
                <img src={Conventioncenter} alt="Conventioncenter" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
               <a href="https://new-stop-watch.netlify.app" target="_blank" rel="noreferrer">
                <img src={Stopwatch} alt="Stopwatch" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
               <a href="https://finance-master.netlify.app/" target="_blank" rel="noreferrer">
                <img src={Financemaster} alt="Financemaster" />
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
