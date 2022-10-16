import React, {useContext, useRef, useState} from "react";
import "./Contact.css"; 
import emailjs from "@emailjs/browser";
import { themecontext } from "../../Context";
const Contact = () => { 
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    emailjs.sendForm('service_iv3sklk','template_vpk2b97', 
    form.current, 'S-SdcdHAmQ5gaW6Eo')
	.then(function(response) {
	   console.log('SUCCESS!', response.status, response.text);
     setDone(true);
	}, function(err) {
	   console.log('FAILED...', err);
	});
    e.preventDefault();
  } 
  const theme = useContext(themecontext);
  const darkmode = theme.state.darkmode;
  return (
    <div className="contact-form" name="contact"> 
      <div className="container">
        <div className="row">
          <div className="col-md-5 offset-md-1">
          <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkmode? '#fff' : ""}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>  
          </div>
          <div className="col-md-5">
          <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Type Message mentioning your Email Here "/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
