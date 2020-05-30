import React from "react"

import Project from "./project"
import "../styles/projectblock.css"

const DAYLY_AWARD = (
  <p className="project-award">
    third prize winner in the
    <a href="http://weblab.mit.edu/winners/">
      2020 MIT web programming competition
    </a>
  </p>
)

const CHIP_AWARD = (
  <p className="project-award">
    winner of the capitalone best financial hack at
    <a href="https://devpost.com/software/chicken-iz031h/">techtogether 2020</a>
  </p>
)

const AZORAHAI_DESC = (
  <div>
    a personal project currently in progress; a random theory generator and
    forum allowing fans of George R. R. Martin's <em>A Song of Ice And Fire</em>{" "}
    series to post their own 'tinfoil' proofs as we wait for{" "}
    <em>The Winds of Winter</em>
  </div>
)

const REREADING_DESC = (
  <div>
    a website that analyzes the effects of rereading and rereading Toni
    Morrison's <em>Recitatif</em>, tracking and visualizing metrics such as
    scrolling time and frequency of words in responses
  </div>
)

const ProjectBlock = () => (
  <div className="projblock-container">
    <Project
      title="DAY.LY"
      desc="an online bullet journal, designed to make beautiful bullet journaling streamlined and easily accessible for everyone"
      image="dayly"
      demo="http://day-ly.herokuapp.com/"
      code="https://github.com/maoivy/dayly"
      team="amy lei & hui min wu"
      awards={DAYLY_AWARD}
    />
    <Project
      title="CHIP"
      desc="a platform for small businesses to place group orders for bulk materials, allowing them to reduce supply costs"
      image="chip"
      demo="http://chip100.herokuapp.com/"
      code="https://github.com/maoivy/chicken"
      team="hui min wu & crystal wang"
      awards={CHIP_AWARD}
    />
    <Project
      title="A SONG OF TIN AND FOIL"
      desc={AZORAHAI_DESC}
      image="azorahai"
      demo="http://azorahai.herokuapp.com/"
      code="https://github.com/maoivy/azorahai"
    />
    <Project
      title="THE READING REDUX"
      desc={REREADING_DESC}
      image="rereading"
      demo="https://rereading.dhmit.xyz/"
      code="https://github.com/dhmit/rereading"
      team="the MIT digital humanities lab"
      awards=""
    />
  </div>
)

export default ProjectBlock
