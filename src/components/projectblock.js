import { Link } from "gatsby"
import React from "react"

import Project from "./project"
import "../styles/projectblock.css"

const ProjectBlock = () => (
  <div className="projblock-container">
    <Project title="A SONG OF TIN AND FOIL" desc="an online bullet journal" />
    <Project title="CHIP" desc="an online bullet journal" />
    <Project title="DAY.LY" desc="an online bullet journal" />
    <Project title="THE READING REDUX" desc="an online bullet journal" />
    <Project title="DAY.LY" desc="an online bullet journal" />
  </div>
)

export default ProjectBlock
