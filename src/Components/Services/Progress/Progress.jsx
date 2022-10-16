import React from 'react'
import './Progress.css';
import ProgressBar from "@ramonak/react-progress-bar";
const Progress = ({completed, maxCompleted}) => {
  return (
    <ProgressBar 
    completed= {`${completed}`}
    bgColor="#fca61f"
    baseBgColor="#242d49"
    labelColor="#ffffff"
    transitionTimingFunction="ease-in"
    animateOnRender
    maxCompleted={`${maxCompleted}`}
    />
  )
}

export default Progress