import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './protectedRoute';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Travel from './pages/Travel';
import PaymentsInfos from './pages/PaymentsInfos';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				{/* HOME SCOPE */}
				<Route exact path="/" component={Home} />
				{/* SIGN SCOPE */}
				<Route path="/app/signup" component={SignUp} />
				<Route path="/app/login" component={Login} />
                {/* DASHBOARD SCOPE */}
                <ProtectedRoute path="/app/dashboard" component={Dashboard} />
				<ProtectedRoute path="/app/start-travel" component={Travel} />
				{/* PAYMENTS SCOPE */}
				<ProtectedRoute path="/app/payments-info" component={PaymentsInfos} />
			</Switch>
		</BrowserRouter>
	);
}