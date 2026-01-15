// Footer.jsx
import React from "react";
import "../theme/Footer.css";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaEnvelope,
  FaPhone 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Premium Top Section */}
      <div className="footer__container">
        <div className="footer__top">
          {/* Brand Section */}
          <div className="footer__brand">
            <div className="footer__logo">
              ToggleNest
            </div>
            <p className="footer__tagline">
              Modern workspace solutions for teams that move fast.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="footer__nav">
            <h4 className="footer__nav-title">Product</h4>
            <ul className="footer__nav-links">
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/workspaces">Workspaces</a></li>
              <li><a href="/analytics">Analytics</a></li>
              <li><a href="/integrations">Integrations</a></li>
            </ul>
          </div>

          
        </div>

        {/* Social & Contact */}
        
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-content">
          <p className="footer__copyright">
            © 2026 ToggleNest. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
