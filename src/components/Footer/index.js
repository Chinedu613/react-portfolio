import React from "react";

function Footer() {
  return (
    <footer className="footer" id="contact-me">
      <a href="mailto:cchukwuani@gmail.com" className="footer__link">
        cchukwuani@gmail.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a className="social-list__link" href="https://twitter.com">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://github.com">
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
