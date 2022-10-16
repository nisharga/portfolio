import React from "react";

import './FloatingDiv.css'
import { animated, useSpring } from 'react-spring';


const FloatinDiv = ({img, text1, text2}) => {
  const styles = useSpring({  
    from: { x: 100 },
    to: { x: 0 },
  })
  return (
    // darkMode style={{ rotateZ }}
    <animated.div className="floatingDiv" style={{
       
      borderRadius: 16,
      ...styles,
    }}>
      <img src={img} alt="" />
       
      <span>
        {text1}
        <br/>
        {text2}
        
      </span>
    </animated.div>
  );
};

export default FloatinDiv;
