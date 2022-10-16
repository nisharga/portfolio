import React from 'react'
import { useState } from 'react'
import { useSpring, animated } from 'react-spring';
import { config } from 'react-spring';

const Scrolling = ({words}) => {
    const [flip, set] = useState(false)
    const { scroll } = useSpring({
        scroll: (words.length - 1) * 50,
        from: { scroll: 0 },
        reset: true,
        reverse: flip,
        delay: 200,
        config: config.molasses,
        onRest: () => set(!flip),
      })
  return (
    <animated.div
      style={{
        position: 'relative', 
        height: 90,
        width: 350,
        overflow: 'hidden',
        paddingTop: '20px',  
         
        marginTop: '-10px',
        
      }}
      scrollTop={scroll}
      clssName="scrolling">
      {words.map((word, i) => (
        <div
          key={`${word}_${i}`}
          style={{ fontSize: '3rem', fontWeight: 'bold', lineHeight: '4.6rem'}}>
          {word}
        </div>
      ))}
    </animated.div>
  )
}

export default Scrolling