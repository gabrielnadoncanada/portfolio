import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import '../App.scss';


class App extends Component {

    render() {
        return (
      
                <div className="App">
                    <Header />
                    {this.props.children}
                    <Footer />
                </div>
 
        )
    }
}

export default App
