import React from "react"

import "../styles/global.css"

import resume from "../images/Ivy Mao's Resume.png"

const Resume = () => (
  <div className="resume-container transition transition--fadein">
    <img className="resume" alt="" src={resume} />
  </div>
)

export default Resume
