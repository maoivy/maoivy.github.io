import { Link } from "gatsby"
import PropTypes from "prop-types"

import React from "react"

import "../styles/navbar.css"

const Navbar = ({ courses, viewCourses, viewProjects }) => {
  let projectClass = "navbar-link"
  let courseClass = "navbar-link"
  if (courses) {
    courseClass = "navbar-link navbar-link-active"
  } else {
    projectClass = "navbar-link navbar-link-active"
  }
  return (
    <div className="navbar-container">
      <div className="navbar-links">
        <div className={projectClass} onClick={() => viewProjects()}>
          projects
        </div>
        <div className={courseClass} onClick={() => viewCourses()}>
          coursework
        </div>
      </div>
    </div>
  )
}

Navbar.propTypes = {
  courses: PropTypes.bool,
  viewCourses: PropTypes.func,
  viewProjects: PropTypes.func,
}

export default Navbar
