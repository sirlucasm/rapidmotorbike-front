// imports
import LogoImage from '../../assets/motorbike-logo.png';
import MaceioImage from '../../assets/maceio.jpg';

import './style.css';
import { Link } from 'react-router-dom';

export default function Home({ history }) {
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
					<Link className="home-header-button fadeIn" to="/app/signup?t=0">Já quero!</Link>
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
				<div className="home-content-observation">
					<div className="home-content-observation-text">
						<h3>Temos mais de 900 pilotos espalhados por toda maceió</h3>
						<p>
							Com a chegada do RapidMotorbike foi gerado uma boa quantidade de empregos para
							a grande Maceió, e não acaba, são vagas ilimitadas, precisamos da sua habilidade com moto! 🏍😍
						</p>
						<Link style={{ marginTop: 20 }} className="home-content-observation-button" to="/app/signup?t=1">Quero trabalhar</Link>
					</div>
					<div className="home-content-observation-maceio-img">
						<img src={MaceioImage} alt="Maceio" />
					</div>
				</div>
			</div>
		</div>
	);
}
