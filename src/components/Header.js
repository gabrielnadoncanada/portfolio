import React, { Component } from 'react'


export default class Header extends Component {

  render() {
    return (
      <header id="header" className="App-header">
        <nav className="navbar navbar-light bg-light fixed-top">
          <div className="container">
            {/* <Link id="logo" className="navbar-brand" href="#">GN</Link> */}
            <button id="menu-toggler" className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

              <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 53 53">
                <g className="menu-container">
                  <g className="bar1">
                    <g className="line">
                      <path d="M2,13.5h49c1.104,0,2-0.896,2-2s-0.896-2-2-2H2c-1.104,0-2,0.896-2,2S0.896,13.5,2,13.5z" />
                    </g>
                  </g>
                  <g className="bar2">
                    <g className="line">
                      <path d="M2,28.5h49c1.104,0,2-0.896,2-2s-0.896-2-2-2H2c-1.104,0-2,0.896-2,2S0.896,28.5,2,28.5z" />
                    </g>
                  </g>

                  <g className="bar3">
                    <g className="line">
                      <path d="M2,43.5h49c1.104,0,2-0.896,2-2s-0.896-2-2-2H2c-1.104,0-2,0.896-2,2S0.896,43.5,2,43.5z" />
                    </g>
                  </g>
                </g>

              </svg>

            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div id="toggle-navbar" data-toggle="collapse" data-target="#navbarSupportedContent"></div>
              <ul className="navbar-nav ml-auto navbar-right">
                <li className="nav-item"><a className="nav-link js-scroll-trigger link-1" href="#main">Intro</a></li>
                <li className="nav-item "><a className="nav-link js-scroll-trigger link-2" href="#features">Expertises</a></li>
                <li className="nav-item "><a className="nav-link js-scroll-trigger link-3" href="#pricing">Projets</a></li>
                <li className="nav-item "><a className="nav-link js-scroll-trigger link-4" href="#reviews">Témoignages</a></li>
                <li className="nav-item "><a className="nav-link js-scroll-trigger link-5" href="#buy">Contact</a></li>

              </ul>

            </div>
          </div>
        </nav>
      </header>
    )
  }
}
