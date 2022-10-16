import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";   
import { themecontext } from "../../Context";
import { animated, easings } from 'react-spring';
import { useSpring } from 'react-spring';
import { Link } from 'react-scroll';
 
const Works = () => { 
  const theme = useContext(themecontext);
  const darkmode = theme.state.darkmode; 
  const { rotateZ } = useSpring({
    from: { 
      rotateZ: 225,
    },
    to: { 
      rotateZ: 0,
    },
    config: {
      duration: 4000,
      easing: easings.easeInOutQuart,
    }
  }) 
  return (
    <div className="works" name="works"> 
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          <div className="w-left">
        <div className="awesome"> 
          <span style={{color: darkmode? "#fff" : ""}}>
            Works for All these
          </span>

          <span>Brands & Clients</span>
          <p className="i-about">
          Self-motivated team player with web developing experience seeking a position as a Front End web developer where I can apply my advanced knowledge of web development with my leadership abilities to meet company needs and exceed their expectations. 
          </p>
          <Link to="contact">
            <button className="button mt-3">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
 
      </div>
          </div>

          <div className="col-md-6">
          <div className="w-right">
 
 <div className="w-mainCircle">

     <animated.div
     style={{  width: 120, height: 120, borderRadius: 16, rotateZ }}>
   <div className="w-secCircle">
     <img src={Upwork} alt="" />
   </div>
   </animated.div>
   
   <animated.div
     style={{  width: 120, height: 120, borderRadius: 16, rotateZ }}>
   <div className="w-secCircle">
     <img src={Fiverr} alt="" />
   </div>
   </animated.div>


   <animated.div
     style={{  width: 120, height: 120, borderRadius: 16, rotateZ }}>
   <div className="w-secCircle">
     <img src={Amazon} alt="" />
   </div>
   </animated.div>


   <animated.div
     style={{  width: 120, height: 120, borderRadius: 16, rotateZ }}>
   <div className="w-secCircle">
     <img src={Shopify} alt="" />
   </div>
   </animated.div>


   <animated.div
     style={{  width: 120, height: 120, borderRadius: 16, rotateZ }}>
   <div className="w-secCircle">
     <img src={Facebook} alt="" />
   </div>
   </animated.div>

 </div> 
 {/* background Circles */}
 <div className="w-backCircle blueCircle"></div>
 <div className="w-backCircle yellowCircle"></div>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
