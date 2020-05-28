import { Link } from "gatsby"
import PropTypes from "prop-types"
import Image from "../components/image"
import React from "react"

import "../styles/project.css"

const Project = ({ title, desc }) => (
  <div className="project-container">
    <div className="project-img">
      <Image />
    </div>
    <div className="project-text">
      <div className="project-title">{title}</div>
      <div className="project-desc">{desc}</div>
    </div>
  </div>
)

Project.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
}

export default Project
