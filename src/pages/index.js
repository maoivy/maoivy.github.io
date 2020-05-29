import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import ProjectBlock from "../components/projectblock"
import Courses from "../components/courses"
import Image from "../components/image"
import SEO from "../components/seo"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons"
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
    return (
      <Layout
        courses={this.state.courses}
        viewCourses={this.viewCourses}
        viewProjects={this.viewProjects}
      >
        <SEO title="home" />
        {this.state.courses ? <Courses /> : <ProjectBlock />}
      </Layout>
    )
  }
}

export default IndexPage
