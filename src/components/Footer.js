import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer-sm">
            <div className="container-m">
              <div className="row">
                <div className="col-md-12">
                  <Link className="footer-logo" href="#">Gabriel Nadon</Link>
                </div>
                <div className="col-md-12">
                  <h6>Gabriel Nadon 2019 Tous droits réservés</h6>
                </div>
                <div className="col-md-12">
                  <ul>
                    <li><a href="https://www.linkedin.com/in/gabriel-nadon-3662a817b/" >Linkedin</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        )
    }
}
