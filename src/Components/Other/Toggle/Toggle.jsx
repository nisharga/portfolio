import React from 'react'
import './Toggle.css';
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';
import { useContext } from 'react'; 
import { themecontext } from '../../../Context';
const Toggle = () => {
    const theme = useContext(themecontext);
    const darkmode = theme.state.darkmode;
    const themetoggle = () => {
        theme.dispatch({type: 'toggle'})
    }
  return (
    <div className='toggle'
        onClick={themetoggle}
    >
        <Sun/>
        <Moon/>
        <div className="t-button"
        style={darkmode ? {right: '2px'} : {left: '2px'}}
        ></div>
    </div>
  )
}

export default Toggle