import React from 'react'
import Flotingdiv from './FloatingDiv/FloatingDiv';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glassesimoji from '../../img/glassesimoji.png'; 
import { animated, useSpring, config } from 'react-spring';
import { useState } from 'react';
const Introright = () => {
  const [flip, set] = useState(false)
  const props2 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  })
  
  return (
    <div className="i-right">
      <img src={Vector1} alt="Vector1" />
      <img src={Vector2} alt="Vector2" />
      <img src={Boy} alt="Boy" />
        <animated.img 
        style={props2}
        src={Glassesimoji} alt="Glassesimoji" />
          <div className="flotingdivone">
              <Flotingdiv img={Crown} text1="Web" text2="Developer"/>    
          </div>
          <div className="flotingdivtwo">
              <Flotingdiv img={Thumbup} text1="Best" text2="Design"/>    
          </div>
          <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
          <div
          className="blur"
          style={{
              background: "#C1F5FF",
              top: "17rem",
              width: "21rem",
              height: "11rem",
              left: "-9rem",
          }}
          ></div> 
    </div>
  )
}

export default Introright