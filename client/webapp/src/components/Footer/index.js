import React from 'react'
import { IndexLink, Link } from 'react-router'

import './style.sass'

export default class Footer extends React.Component {
  render () {
    return (
      <footer className="cx-footer">
        <IndexLink className="footer-icon" to="/posts" activeClassName="active">
          <span className="fa fa-home"></span>
          <span>主页</span>
        </IndexLink>
        {/*
          <Link className="footer-icon" to="/messages" activeClassName="active">
            <span className="fa fa-commenting"></span>
            <span>私信</span>
          </Link>
        */}
        <Link className="footer-icon" to="/account" activeClassName="active">
          <span className="fa fa-user"></span>
          <span>我的</span>
        </Link>
      </footer>
    )
  }
}
