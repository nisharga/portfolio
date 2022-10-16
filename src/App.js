import Navbar from "./Components/Shared/Navbar/Navbar";
import { useContext } from "react";
import { themecontext } from "./Context";
import "./App.css";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonials/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Shared/Footer/Footer";
function App() {
  const theme = useContext(themecontext);
  const darkmode = theme.state.darkmode;
  return (
    <div
      style={{
        background: darkmode ? "black" : "",
        color: darkmode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
