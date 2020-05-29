import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../styles/sidebar.css"

const Sidebar = ({ siteTitle }) => (
  <div className="sidebar-container">
    <div>
      <Link to="/" className="sidebar-name">
        {siteTitle}
      </Link>
      <div className="sidebar-bio">
        hello! i'm a freshman studying computer science at MIT. i like coding,
        music, and history.
      </div>
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
