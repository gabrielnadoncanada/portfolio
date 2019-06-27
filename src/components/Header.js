import React, { Component } from 'react'
import { Link } from 'react-router'


export default class Header extends Component {

  render() {
    return (
      <header id="header" className="App-header">
        <nav className="navbar navbar-light bg-light fixed-top">
          <div className="container">
            {/* <Link id="logo" className="navbar-brand" href="#">GN</Link> */}
            <button id="menu-toggler" className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto navbar-right">
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#main">Intro</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#features">Expertises</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#pricing">Projets</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#reviews">Témoignages</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#buy">Contact</a></li>
              </ul>

            </div>
          </div>
        </nav>
      </header>
    )
  }
}
