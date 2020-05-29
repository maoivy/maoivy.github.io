/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Sidebar from "./sidebar"
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
    <div className="page">
      <div className="window-container">
        <Navbar
          courses={courses}
          viewCourses={viewCourses}
          viewProjects={viewProjects}
        />
        <div className="window">
          <Sidebar siteTitle={data.site.siteMetadata.title} />
          <main className="content">{children}</main>
        </div>
        <Footer />
      </div>
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
