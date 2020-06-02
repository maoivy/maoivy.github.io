// import PropTypes from "prop-types"
import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../styles/global.css"

const Footer = () => (
  <footer className="footer-container transition--fadeinlate">
    <div className="footer-links">
      <a href="https://github.com/maoivy" className="footer-link">
        <FontAwesomeIcon icon={["fab", "github-square"]} />
      </a>
      <a href="https://www.linkedin.com/in/ivymao/" className="footer-link">
        <FontAwesomeIcon icon={["fab", "linkedin"]} />
      </a>
    </div>
    <div className="footer-credit">coded with ♡ by ivy mao</div>
  </footer>
)

export default Footer
