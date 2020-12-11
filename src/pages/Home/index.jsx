import { useEffect } from 'react';

// imports
import UserService from '../../services/UserService';
import LogoImage from '../../assets/motorbike-logo.png'

import './style.css';

export default function Home({ history }) {
	useEffect(() => {
		if (UserService.isAuthenticated()) history.push('/app/dashboard');
	}, [history]);

	return (
		<div className="home-page home-background">
			<div className="home-header">
				<div className="logo-area">
					<img className="logo-img" src={LogoImage} alt="Motorbike Logotipo" />
				</div>
				<div>
					<h2>Faça agora suas viagens, segura, rápida e barata.</h2>
				</div>
			</div>
			<div className="home-content">
				<div className="home-content-background">
					
				</div>
			</div>
		</div>
	);
}
