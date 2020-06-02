import React from "react"

import "../styles/global.css"

const Courses = () => (
  <div className="courses-container transition transition--fadein">
    <div className="semester">spring 2020</div>
    <div className="classes">
      <div className="class">
        <div className="class-num coding">6.009</div>
        fundamentals of programming
      </div>
      <div className="class">
        <div className="class-num coding">6.006</div>
        introduction to algorithms
      </div>
      <div className="class">
        <div className="class-num coding">6.08</div>
        introduction to eecs via interconnected embedded systems
      </div>
      <div className="class">
        <div className="class-num">21M.301</div>
        harmony and counterpoint
      </div>
    </div>

    <div className="semester">iap 2020</div>
    <div className="classes">
      <div className="class">
        <div className="class-num coding">6.148</div>
        mit web programming competition
      </div>
    </div>

    <div className="semester">fall 2019</div>
    <div className="classes">
      <div className="class">
        <div className="class-num coding">6.042</div>
        mathematics for computer science
      </div>
      <div className="class">
        <div className="class-num">18.022</div>
        multivariable calculus
      </div>
      <div className="class">
        <div className="class-num">8.02</div>
        electricity and magnetism
      </div>
      <div className="class">
        <div className="class-num">24.900</div>
        introduction to linguistics
      </div>
    </div>
  </div>
)

export default Courses
