import React from 'react'
import { Link } from 'react-router'

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div>
                        <p>Gabriel Nadon 2019. All rights reserved</p>
                    </div>
                    <div>
                        <ul className="flex">
                            <li>
                                <Link to="/"><img className="social" src={require('../assets/img/facebook.svg')} alt="facebook"></img></Link>
                            </li>
                            <li>
                                <Link to="/"><img className="social" src={require('../assets/img/instagram.svg')} alt="instagram"></img></Link>
                            </li>
                            <li>
                                <Link to="/"><img className="social" src={require('../assets/img/linkedin.svg')} alt="linkedin"></img></Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </footer>
        );
    }
}

export default Footer;