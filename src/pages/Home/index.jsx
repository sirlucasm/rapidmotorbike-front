import { useEffect } from 'react';

// imports
import UserService from '../../services/UserService';
import LogoImage from '../../assets/motorbike-logo.png'

import './style.css';
import { Link } from 'react-router-dom';

export default function Home({ history }) {
	useEffect(() => {
		if (UserService.isAuthenticated()) history.push('/app/dashboard');
	}, [history]);

	return (
		<div className="home-page home-background">
			<div className="home-header home-header-background">
				<div className="logo-area">
					<img className="logo-img" src={LogoImage} alt="Motorbike Logotipo" />
				</div>
				<div className="home-header-title-area fadeInRight">
					<h2>Viagem rápida, segura e barata</h2>
				</div>
				<div>
					<Link className="home-header-button fadeIn" to="/app/signup">Já quero!</Link>
				</div>
			</div>
			<div className="home-content">
				<div className="home-content-title-area">
					<h2>Pra você e para sua empresa</h2>
				</div>
				<div className="home-content-card">
					<div className="home-content-card-item">
						<img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_360,h_240/v1585954525/assets/14/fcb55f-8d2c-4037-be40-96265930413e/original/business-eater-horz2x.png" alt="Card icon"/>
						<h3>Pedidos feitos no trabalho</h3>
						<p>Impressione sua equipe com os pedidos favoritos dos seus colaboradores entregues onde eles estiverem trabalhando.</p>
					</div>
					<div className="home-content-card-item">
						<img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_360,h_240/v1585954625/assets/6a/4717e8-ac27-493e-a940-990e87d31f02/original/employee-travel-horz2x.png" alt="Card icon"/>
						<h3>Viagens de colaboradores</h3>
						<p>Simplifique as viagens a trabalho. Crie programas de deslocamento diário e transporte urbano para colaboradores.</p>
					</div>
					<div className="home-content-card-item">
						<img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_360,h_240/v1585954718/assets/e1/70f6a1-f828-414c-b3f1-fa39a6915711/original/ride-coordinator-horz2x.png" alt="Card icon"/>
						<h3>Viagens de cortesia</h3>
						<p>Quer impressionar? Solicite viagens até a porta para seus clientes e convidados.</p>
					</div>
				</div>
			</div>
		</div>
	);
}
