import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, hashHistory} from 'react-router'


import Nav from './pages/Nav.jsx'
import App from './pages/App.jsx'
import Show from './pages/Show.jsx'

class Home extends React.Component {
  constructor(props) {
  	super(props)

  }

  render () {
    return (
    	<div>
	    	<Nav />
	    	<App />
    	</div>
    )
  }
}


ReactDOM.render(<Home />, document.getElementById('app'));


// ReactDOM.render((
// 	<Router>
// 			<Route path='/' component={App} />
// 			<Route path='/home' component={Home} />
// 			<Route path='/show' component={Show} />
	
// 	</Router>


// ), document.getElementById('app'));








