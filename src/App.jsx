import React from 'react';
import Routes from './routes';

// imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './animations.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
	AOS.init();
	return (
		<>
			<Routes />
		</>
	);
}