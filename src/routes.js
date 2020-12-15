import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './protectedRoute';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				{/* HOME SCOPE */}
				<Route exact path="/" component={Home} />
				{/* SIGN SCOPE */}
				<Route path="/app/signup" component={SignUp} />
                {/* DASHBOARD SCOPE */}
                <ProtectedRoute path="/app/dashboard" component={Dashboard} />
			</Switch>
		</BrowserRouter>
	);
}