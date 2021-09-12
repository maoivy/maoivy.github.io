import PropTypes from "prop-types"

import React from "react"

import "../styles/global.css"

const Navbar = ({ page, viewPage }) => {
  return (
    <div className="navbar-container transition--fadeinlate">
      <div className="navbar-links">
        <div className={`navbar-link ${page === "projects" && "navbar-link-active"}`} onClick={() => viewPage("projects")}>
          projects
        </div>
        <div className={`navbar-link ${page === "courses" && "navbar-link-active"}`} onClick={() => viewPage("courses")}>
          coursework
        </div>
        <div className={`navbar-link ${page === "resume" && "navbar-link-active"}`} onClick={() => viewPage("resume")}>
          resume
        </div>
      </div>
    </div>
  )
}

Navbar.propTypes = {
  page: PropTypes.string,
  viewPage: PropTypes.func,
}

export default Navbar
