import React from 'react';
import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from 'react-router-dom';
import { Navbar } from '../components/Components';
import { About, Detail, Home, Notfound, Tour } from '../pages/Pages';

const Routes = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" element={<Home />} />
				<Route exact path="about" element={<About />} />
				<Route exact path="tour" element={<Tour />} />
				<Route exact path="tour/:id" element={<Detail />} />
				<Route exact path="*" element={<Notfound />} />
			</Switch>
		</Router>
	);
};

export default Routes;
