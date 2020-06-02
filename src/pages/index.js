import React from "react"

import Layout from "../components/layout"

import ProjectBlock from "../components/projectblock"
import Courses from "../components/courses"
import SEO from "../components/seo"

import "../styles/global.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons"
// import { faCode } from "@fortawesome/free-solid-svg-icons"
library.add(faLinkedin, faGithubSquare)

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: false,
    }
  }

  viewCourses = () => {
    this.setState({ courses: true })
  }

  viewProjects = () => {
    this.setState({ courses: false })
  }

  render() {
    let courseClassName = "page-hidden transition--fadein"
    let projectClassName = "page-active transition--fadein"
    if (this.state.courses) {
      courseClassName = "page-active transition--fadein"
      projectClassName = "page-hidden transition--fadein"
    }
    return (
      <Layout
        courses={this.state.courses}
        viewCourses={this.viewCourses}
        viewProjects={this.viewProjects}
      >
        <SEO title="home" />
        {/* {this.state.courses ? (
          <Courses className={courseClassName} />
        ) : (
          <ProjectBlock className={projectClassName} />
        )} */}
        <div className={courseClassName}>
          <Courses />
        </div>
        <div className={projectClassName}>
          <ProjectBlock />
        </div>
      </Layout>
    )
  }
}

export default IndexPage
