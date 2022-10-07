import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../styles/global.css"

const Sidebar = ({ siteTitle }) => (
  <div className="sidebar-container transition--sidebarslide">
    <Link to="/" className="sidebar-name">
      {siteTitle}
    </Link>
    <div className="sidebar-bio">
      hello! my name is ivy, and i'm currently a senior at MIT majoring in computer science and minoring in econ and math. 
      i like coding, music, and history.
    </div>
  </div>
)

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
}

Sidebar.defaultProps = {
  siteTitle: ``,
}

export default Sidebar
