import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons"
library.add(faLinkedin, faGithubSquare)

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
      </Layout>
    )
  }
}

export default IndexPage
