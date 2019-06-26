import React, { Component } from 'react'
import Banner from './hero-banner/Banner'
import { Link } from 'react-router'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    {/* navigation */}
                    {/* <nav>
                    <ul className="jc_end">
                        <li>
                            <Link to="/">Services</Link>
                        </li>
                        <li>
                            <Link to="/">Projets</Link>
                        </li>
                        <li>
                            <Link to="/">Contact</Link>
                        </li>
                        <li>
                            <Link to="/">Snippets</Link>
                        </li>
                    </ul>
                </nav> */}
                    {/* section hero banner */}
                    <Banner />
                </div>

            </header>
        )
    }
}
