import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import UserService from './services/UserService';

export default function ProtectedRoute({ component: Component, ...rest }) {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (UserService.isAuthenticated()) return <Component {...props} />;
				return (
					<Redirect to={{
						pathname: '/app/signup?t=0',
						state: {
							message: 'Você deve estar logado',
						},
					}}
					/>
				);
			}}
		/>
	);
}