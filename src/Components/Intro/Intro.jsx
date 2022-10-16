import React from 'react'
import './Intro.css';   
import Introleft from './Introleft ';
import Introright from './Introright';
import { useContext } from 'react';
import { themecontext } from '../../Context';
const Intro = () => { 
    const theme = useContext(themecontext);
  const darkmode = theme.state.darkmode;
  return (
    <div className='intro'style={ {backgroundColor: darkmode? '#000' : "#F2DBFF"} } >
        <div className="container">
            <div className="row">
               <div className="col-lg-6 col-md-12"> 
                  <Introleft/>
                </div> 
                <div className="col-lg-6 col-md-12 mt-md-5"> 
                    <Introright/>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Intro