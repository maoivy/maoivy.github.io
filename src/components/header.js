import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../styles/header.css"

const Header = ({ siteTitle }) => (
  <header className="header-container">
    <h1 style={{ margin: 0 }}>
      <Link to="/" className="header-name">
        {siteTitle}
      </Link>
      <div className="header-bio">
        hello! i'm a freshman studying computer science at MIT, and i like
        coding, music, and history.
      </div>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
