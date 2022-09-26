import React, { useContext } from 'react' 
import Toggle from '../../Other/Toggle/Toggle';
import './Navbar.css'; 
import { Link } from 'react-scroll'; 
import { themecontext } from '../../../Context';
const Navbar = () => {
    const theme = useContext(themecontext);
    const darkmode = theme.state.darkmode;
  return ( 
    <div className={`header ${darkmode? 'darkheader' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <a href="www.google.com" className="navbar-brand"
                    style={ {color: darkmode? '#fff' : ""} }
                >
                    NISHARGA
                </a>
                <Toggle/>
                <button
                  className="navbar-toggler" 
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link to="/" className="nav-link"
                       >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                      to="services" spy={true} smooth={true} offset={50} duration={500}
                       
                      className="nav-link">
                        Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/portfolio" className="nav-link">
                        Portfolio
                      </Link>
                    </li> 
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar