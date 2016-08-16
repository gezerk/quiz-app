import React from 'react';  
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


import Layout from './Layout'
import Quiz from './pages/Quiz'
import Settings from './pages/Settings'
import Reports from './pages/Reports'

const app = document.getElementById('root');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Layout}>
			<IndexRoute component={ Quiz }></IndexRoute>
			<Route path='settings' component={Settings}></Route>
			<Route path='reports' component={Reports}></Route>
		</Route>
	</Router>,
	 app)
