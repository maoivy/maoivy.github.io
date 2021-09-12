import React from "react"

import Layout from "../components/layout"

import ProjectBlock from "../components/projectblock"
import Courses from "../components/courses"
import Resume from "../components/resume"
import SEO from "../components/seo"

import "../styles/global.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons"
library.add(faLinkedin, faGithubSquare)

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: "projects",
    }
  }

  viewPage = (page) => {
    this.setState({ page: page })
  }

  render() {
    return (
      <Layout
        page={this.state.page}
        viewPage={this.viewPage}
      >
        <SEO title="home" />
        <div className={`${this.state.page !== "projects" && "page-hidden"} transition--fadein`}>
          <ProjectBlock />
        </div>
        <div className={`${this.state.page !== "courses" && "page-hidden"} transition--fadein`}>
          <Courses />
        </div>
        <div className={`${this.state.page !== "resume" && "page-hidden"} transition--fadein`}>
          <Resume />
        </div>
      </Layout>
    )
  }
}

export default IndexPage
