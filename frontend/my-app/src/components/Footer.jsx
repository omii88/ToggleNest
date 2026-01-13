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

          <div className="footer__nav">
            <h4 className="footer__nav-title">Company</h4>
            <ul className="footer__nav-links">
              <li><a href="/about">About</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Social & Contact */}
        <div className="footer__social-section">
          <div className="footer__social">
            <div className="footer__social-icons">
              <a href="#" aria-label="Facebook" className="social-link">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <FaTwitter />
              </a>
              <a href="#" aria-label="LinkedIn" className="social-link">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <FaInstagram />
              </a>
            </div>
            
            <div className="footer__contact">
              <p><FaEnvelope className="contact-icon" /> hello@togglenest.com</p>
              <p><FaPhone className="contact-icon" /> +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
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
