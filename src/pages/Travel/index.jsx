import { useState, useEffect } from 'react';

// imports
import PaymentsMethods from '../../components/PaymentsMethods';
import PaymentsInfosService from '../../services/PaymentsInfosService';
import UserService from '../../services/UserService';
import { Avatar, Button } from '@material-ui/core';

import './style.css';

export default function Travel({ location }) {
    const { locale } = location.state;
    const [ me, setMe ] = useState();
    const [ paymentsInfos, setPaymentsInfos ] = useState();
    const [ pilots, setPilots ] = useState();

    const [ pilotSelected, setPilotSelected ] = useState();
    const [ selected, setSelected ] = useState(false);

    useEffect(() => {
        const fetchCurrentUser = () => {
            UserService.fetchLoggedUser()
                .then(res => setMe(res.data))
                .catch(error => console.log(error.message));
        }
    
        const fetchPaymentsInfos = () => {
            PaymentsInfosService.fetchPaymentsInfos()
                .then(res => setPaymentsInfos(res.data))
                .catch(error => console.log(error.message));
        }

        const fetchPilots = () => {
            UserService.fetchPilots()
                .then(res => setPilots(res.data))
                .catch(error => console.log(error.message));
        }

        fetchCurrentUser();
        fetchPaymentsInfos();
        fetchPilots();
    }, []);

    return (
        <div className="travel-page container">
            <div className="row justify-content-center travel-header-title">
                <h2>Olá, {me?.name.split(' ')[0]}!</h2>
            </div>
            <div className="travel-payments-methods">
                <div className="travel-payments-methods-title">
                    <h5>Escolha uma forma de pagamento</h5>
                </div>
                <PaymentsMethods
                    paymentsInfos={paymentsInfos}
                />
            </div>
            <div className="travel-content">
                {
                    selected ?
                    <div className="travel-content-pilot-selected">
                        <div className="row justify-content-center travel-header-title">
                            <h5>Agora confirme a viagem</h5>
                        </div>
                        <div className="travel-content-you" style={{ marginTop: 20, flex: 1, alignSelf: 'center'}}>
                            <div className="fadeInRight">
                                <Avatar style={{ width: 80, height: 80, backgroundColor: 'orange' }}>Você</Avatar>
                            </div>
                            <div>
                                <span className="travel-content-you-locale">{locale}</span>
                            </div>
                        </div>
                        <div className="travel-content-pilot">
                            <div className="fadeInLeft">
                                <Avatar style={{ width: 80, height: 80, }}>{pilotSelected.nameShortcut}</Avatar>
                            </div>
                            <div>
                                <span className="travel-content-you-locale">{pilotSelected.address ? pilotSelected.address : 'Não conseguimos encontrar o endereço do piloto'}</span>
                            </div>
                        </div>
                        <Button
                            color="default"
                            style={{ marginTop: 40, }}
                            onClick={() => setSelected(false)}
                        >
                            Voltar
                        </Button>
                        <Button
                            color="primary"
                            variant="contained"
                            style={{ marginTop: 5, }}
                            onClick={() => setSelected(false)}
                        >
                            Confirmar viagem
                        </Button>
                    </div>
                    :
                    <div className="travel-content-pilots">
                        <div className="row justify-content-center travel-header-title">
                            <h5>Selecione um piloto para seguir a viagem</h5>
                        </div>
                        {
                            pilots && pilots.map((pilot, index) => {
                                pilot.nameShortcut = `${pilot.name.split(' ')[0][0]}${pilot.name.split(' ')[1][0]}`;
                                return (
                                    <div key={index} className="travel-content-pilots-selection" onClick={() => { setPilotSelected(pilot); setSelected(true); } }>
                                        <Avatar style={{ width: 80, height: 80, }}>{pilot.nameShortcut}</Avatar>
                                        <span style={{ marginLeft: 12 }}>{pilot.name}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
        </div>
    );
}