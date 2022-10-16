import React, { useContext } from "react";
import { config, useSpring, animated } from "react-spring";
import { themecontext } from "../../Context";
 import "./Experience.css";
const Experience = () => { 
  const theme = useContext(themecontext);
    const darkmode = theme.state.darkmode; 
  const { experience } = useSpring({
    reset: true, 
    from: { experience: 0 },
    experience: 3,
    delay: 700,
    config: config.molasses, 
  })
  const { projects } = useSpring({
    reset: true, 
    from: { projects: 0 },
    projects: 25,
    delay: 500,
    config: config.molasses, 
  })
  const { companies } = useSpring({
    reset: true, 
    from: { companies: 0 },
    companies: 2,
    delay: 800,
    config: config.molasses, 
  })
  const { teamproject } = useSpring({
    reset: true, 
    from: { teamproject: 0 },
    teamproject: 10,
    delay: 800,
    config: config.molasses, 
  })
  const { previesproject } = useSpring({
    reset: true, 
    from: { previesproject: 0 },
    previesproject: 8,
    delay: 800,
    config: config.molasses, 
  })
  const { satisfy } = useSpring({
    reset: true, 
    from: { satisfy: 0 },
    satisfy: 50,
    delay: 800,
    config: config.molasses, 
  })
  return (
    <div className="experience" name='experience'>
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-6 pt-2 pb-4">
            <div className="achievement">  
            <animated.div className="circle" 
            style={{backgroundColor: darkmode? '#FCA61F' : '#fff'}}>
            {experience.to(n => n.toFixed())}
              </animated.div> 
              
            <span style={ {color: darkmode? '#fff' : ""} }>Years+</span>
            <span>Experience</span>
          </div> 
          </div> 

           <div className="col-lg-2 col-md-4 col-sm-6 pt-2 pb-4">
            <div className="achievement">  
            <animated.div className="circle" 
            style={{backgroundColor: darkmode? '#FCA61F' : '#fff'}}>
            {projects.to(n => n.toFixed())}
              </animated.div> 
              
            <span style={ {color: darkmode? '#fff' : ""} }>Projects+</span>
            <span>Done</span>
          </div> 
          </div>  

           <div className="col-lg-2 col-md-4 col-sm-6 pt-2 pb-4">
            <div className="achievement">  
            <animated.div className="circle" 
            style={{backgroundColor: darkmode? '#FCA61F' : '#fff'}}>
            {companies.to(n => n.toFixed())}
              </animated.div> 
              
            <span style={ {color: darkmode? '#fff' : ""} }>Companies+</span>
            <span>Internships</span>
          </div> 
          </div> 

          <div className="col-lg-2 col-md-4 col-sm-6 pt-2 pb-4">
            <div className="achievement">  
            <animated.div className="circle" 
            style={{backgroundColor: darkmode? '#FCA61F' : '#fff'}}>
            {satisfy.to(n => n.toFixed())}
              </animated.div> 
              
            <span style={ {color: darkmode? '#fff' : ""} }>Person+</span>
            <span>Satisfy</span>
          </div> 
          </div> 

          <div className="col-lg-2 col-md-4 col-sm-6 pt-2 pb-4">
            <div className="achievement">  
            <animated.div className="circle" 
            style={{backgroundColor: darkmode? '#FCA61F' : '#fff'}}>
            {previesproject.to(n => n.toFixed())}
              </animated.div> 
              
            <span style={ {color: darkmode? '#fff' : ""} }>Previes Project+</span>
            <span>Next Level</span>
          </div> 
          </div>
          
          
         

          <div className="col-lg-2 col-md-4 col-sm-6 pt-2 pb-4">
            <div className="achievement">  
            <animated.div className="circle" 
            style={{backgroundColor: darkmode? '#FCA61F' : '#fff'}}>
            {teamproject.to(n => n.toFixed())}
              </animated.div> 
              
            <span style={ {color: darkmode? '#fff' : ""} }>Team Project+</span>
            <span>Done</span>
          </div> 
          </div> 

        </div>
      </div>
    </div>
  );
};

export default Experience;
