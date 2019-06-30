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
                  <ul>
                    <li><a href="https://www.linkedin.com/in/gabriel-nadon-3662a817b/" >Linkedin</a></li>
                    <li><a href="mailto:gabrielnadoncanada@gmail.com">gabrielnadoncanada@gmail.com</a></li>
                  </ul>
                </div>
                <div className="col-md-12">
                  <h6>&copy; 2019 nadongabriel.com</h6>
                </div>
                
              </div>
            </div>
          </footer>
        )
    }
}
