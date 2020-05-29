import PropTypes from "prop-types"
import React from "react"

import "../styles/project.css"
import chip from "../images/chip.png"
import dayly from "../images/daylydark.png"
import rereading from "../images/rereading.png"
import azorahai from "../images/azorahai.png"

const THUMBNAILS = {
  chip: chip,
  dayly: dayly,
  rereading: rereading,
  azorahai: azorahai,
}

const Project = ({ title, desc, image, demo, code, team, awards }) => (
  <div className="project-container">
    <img className="project-img" alt="" src={THUMBNAILS[image]} />
    <div className="project-text">
      <div className="project-title">{title}</div>
      <div className="project-links">
        <a href={demo}>link</a>
        <a href={code}>code</a>
        {team && <div className="project-team">| with {team}</div>}
      </div>
      <div className="project-desc">{desc}</div>
      {awards}
    </div>
  </div>
)

Project.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  image: PropTypes.string,
  demo: PropTypes.string,
  code: PropTypes.string,
  team: PropTypes.string,
  awards: PropTypes.string,
}

export default Project
