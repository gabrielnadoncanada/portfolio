import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer-sm">
            <div className="container-m">
              <div className="row">
                <div className="col-md-4">
                  <Link className="footer-logo" href="#">Pelican.</Link>
                </div>
                <div className="col-md-4">
                  <h6>IOThemes 2018 Rights Reserved</h6>
                </div>
                <div className="col-md-4">
                  <ul>
                    <li><Link to="#">Facebook</Link></li>
                    <li><Link to="#">Twitter</Link></li>
                    <li><Link to="#">Linkedin</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        )
    }
}
