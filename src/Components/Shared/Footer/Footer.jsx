import React from "react";
import "./Footer.css";
import Wave from "../../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-linkedin"; 
import Gitub from "@iconscout/react-unicons/icons/uil-github"; 
import { Popupfooter } from "../../Other/Popupfooter/Popupfooter";
 
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Kabirnisharga@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/nisharga-kabir/" target="_blank" rel="noreferrer"><Insta color="white" size={"3rem"} /></a>
          <a href="https://github.com/nisharga" target="_blank" rel="noreferrer"><Gitub color="white" size={"3rem"} /></a>
          <Popupfooter/> 
        </div>
      </div>
    </div>
  );
};

export default Footer;
