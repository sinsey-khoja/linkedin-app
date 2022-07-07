import React from "react";
import { LogoIcon } from "../../assets/svg";

import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
        <div className="footer-logo">
          <LogoIcon />
          <h2>
            Linked<span>In</span>
          </h2>
        </div>
        <div className="footer-nav">
          <h3>Navigation</h3>
          <div className="footer-nav-links">
            <ul>
              <li>About</li>
              <li> Careers</li>
              <li> Advertising</li>
              <li> Small Business</li>
            </ul>
            <ul>
              <li> Talent Solutions</li>
              <li> Marketing Solutions</li>
              <li> Sales Solutions</li>
              <li> Safery Center</li>
            </ul>
            <ul>
              <li> Community Guidelines</li>
              <li> Privacy & Terms </li>
              <li> Mobile App</li>
            </ul>
          </div>
        </div>
        <div className="access">
          <h3>Fast access</h3>
          <button className="btn-blue">Questions?</button>
          <button className="btn-white">Settings</button>
        </div>
        <div className="language">
          <h3>Language</h3>
          <h2>English</h2>
        </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
