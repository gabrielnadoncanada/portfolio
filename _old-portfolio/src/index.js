
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import App from './components/App'
import MainAccueil from './components/MainAccueil'




ReactDOM.render((
 
  <Router history={hashHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={MainAccueil}/>
            </Route>
        </Router>

      
    
), document.getElementById('app'));
