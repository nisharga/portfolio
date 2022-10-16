import React from 'react'
import './Services.css'; 
import Resume from './Nisharga-Kabir-Resume.pdf';
import { useContext } from 'react';
import { themecontext } from './../../Context';
import Progress from './Progress/Progress';
const Services = () => {
  const theme = useContext(themecontext);
  const darkmode = theme.state.darkmode;
  return (
    <div className="services" name="services" >
      <div className="container">
        <div className="row">
          {/* left side */}
        <div className="col-lg-8 col-md-12">
        <div className="awesome">
          <h4><span style={ {color: darkmode? '#fff' : ""} } className="about">About </span>
          <span className="nisharga">Nisharga</span></h4>  <br /><br />

          <h4>I mostly develop websites/ web applications using react and using various JavaScript libraries and frameworks. I have a good knowledge of software development in general as well. </h4>

          <p className="i-about">About my skills, I know React, TypeScript, Node, Express, MongoDB, FireBase, JSX, DOM manipulation, And much more. I had 2 internships as well in Programming Hero where along with core technical things I also learned organizational ethics and discipline. Moreover, I also did 2 successful individual projects.  <br></br><br></br>

           My short-term goal is to get a job in a reputed company, where I can use my skills and knowledge to deliver value-added results, and in long term, the goal would be to achieve a good position in the particular company to scale up the organizations production & growth rate and at the same time for the betterment of my personal career growth as well.   <br></br><br></br>

           Thats all about me. And yes, thanks for the opportunity given to introduce myself.</p> 

          <a href={Resume} download><button className='button '>Download CV</button></a>
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div> 
        </div>
        {/* right */}
        <div className="col-lg-4 col-md-12 mt-lg-5">
        <div className="cards mt-5">
          <div className="singleCard mt-2 mb-3">
            <h5>React</h5>
            <Progress completed={90} maxCompleted={95}/>
          </div>
          <div className="singleCard mt-2 mb-3">
            <h5>MongoDB</h5>
            <Progress completed={75} maxCompleted={85}/>
          </div>
          <div className="singleCard mt-2 mb-3">
            <h5>Node JS</h5>
            <Progress completed={80} maxCompleted={85}/>
          </div>
          <div className="singleCard mt-2 mb-3">
            <h5>Express</h5>
            <Progress completed={86} maxCompleted={93}/>
          </div>
          <div className="singleCard mt-2 mb-3">
            <h5>FireBase</h5>
            <Progress completed={88} maxCompleted={95}/>
          </div>
           
          <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div> 
        </div>
        </div>
      </div>
      </div>
      </div>
  )
}

export default Services