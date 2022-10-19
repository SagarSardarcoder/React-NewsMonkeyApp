import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NewsMonkey</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/Business">Business</Link></li>
                  <li><Link className="dropdown-item" to="/Entertainment">Entertainment </Link></li>
                  <li><Link className="dropdown-item" to="/Health">Health</Link></li>
                  <li><Link className="dropdown-item" to="/Science">Science </Link></li>
                  <li><Link className="dropdown-item" to="/Sports">Sports </Link></li>
                  <li><Link className="dropdown-item" to="/Technology">Technology </Link></li>
                </ul>
              </div>
              <li className="nav-item">
                <Link className="nav-link " to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/Contact UsS">Contact Us</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    )
  }
}
