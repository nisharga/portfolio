import React  from 'react';  
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Popupfooter.css'; 
export const Popupfooter = () => { 
  return (
    <div>
       <Popup trigger={
       <button className="button">
        Cover Letter
       </button>
      } modal>
        <div className="popupcontent">
        <h4> Dear Hiring Manager, </h4> 
    <p> I am writing in regard to the React Developer opening that I came to know through your company profile. I am confident that I have the necessary skills and experience that would make me the perfect candidate for the job.</p>
    <p> I have been working as a React Developer for one year and have gained a lot of experience in the field. I am well-versed in all aspects of React development, from setting up the environment to creating components to using React with Redux. I am also familiar with TypeScript, Node, Express, MongoDB FireBase, JSX And much more. </p>
    <p> I am also familiar with Product Management tools such as JIRA. Furthermore, I also work as a Freelance Web Developer for various clients which has given me a diverse experience on Web Development and has added more skills to my arsenal.  I am confident that I could provide value to you and your customers as a member of your team.</p>
    <p>Thank you for your consideration, I look forward to learning more about the web developer position.</p> 
<h5>Sincerely</h5>
<h5>Nisharga Kabir </h5>
        </div>
        </Popup>
    </div>
  )
}
