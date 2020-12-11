import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './protectedRoute';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />

                {/* DASHBOARD SCOPE */}
                <ProtectedRoute path="/app/dashboard" component={Dashboard} />
			</Switch>
		</BrowserRouter>
	);
}