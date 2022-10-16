import React from 'react'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png'; 
import Scrolling from './Scrolling/Scrolling';
import { Link } from 'react-scroll';
import { useSpring, animated   } from 'react-spring'  
import { useContext } from 'react';
import { themecontext } from '../../Context'; 

const Introleft  = () => {
  const theme = useContext(themecontext);
  const darkmode = theme.state.darkmode;
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })  
  const words = ['Developer','Designer', 'Full-Stack', 'React'];
  return ( 
      <div className='i-left'>
        <div className='i-name'>
          <div className="heading d-flex ">
            <span style={ {color: darkmode? '#fff' : ""} }
            className="mr-auto p-2">Hy! I am</span>
            <Scrolling words={words}></Scrolling>
          </div>
            <animated.span style={props}>Nisharga Kabir</animated.span>  
            <span className="i-about">Frontend Developer with high level of experience in web designing and development, producting the Quality work</span>
        </div>            
        <div className="buttonarea">
            <Link className="button i-button" to='/'>Hire me</Link>
        </div>
        <div className="i-icons"> 
            <a href="https://github.com/nisharga" target="_blank" rel="noreferrer">
            <img src={Github} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/nisharga-kabir/" target="_blank" rel="noreferrer">
            <img src={Linkedin} alt="Linkedin" />
            </a> 
        </div>
      </div> 
  )
}

export default Introleft 