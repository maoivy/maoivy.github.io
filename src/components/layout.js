/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Navbar from "./navbar"
import Footer from "./footer"
import "../styles/global.css"

const Layout = ({ children, courses, viewCourses, viewProjects }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="page-container">
      <div className="top-container">
        <div>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Navbar
            courses={courses}
            viewCourses={viewCourses}
            viewProjects={viewProjects}
          />
        </div>
      </div>
      <div className="content-container">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  courses: PropTypes.bool,
  viewCourses: PropTypes.func,
  viewProjects: PropTypes.func,
}

export default Layout
