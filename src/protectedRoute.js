import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import UserService from './services/UserService';

export default function ProtectedRoute({ component: Component, ...rest }) {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (true) return <Component {...props} />;
				return (
					<Redirect to={{
						pathname: '/app/login',
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