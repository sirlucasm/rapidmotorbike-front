import { useState, useEffect } from 'react';
import PaymentsMethods from '../../components/PaymentsMethods';
import PaymentsInfosService from '../../services/PaymentsInfosService';

// imports
import UserService from '../../services/UserService';

import './style.css';

export default function Travel({ location }) {
    const { locale } = location.state;
    const { me, setMe } = useState();
    const { paymentsInfos, setPaymentsInfos } = useState();

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

        fetchCurrentUser();
        fetchPaymentsInfos();
    }, [setMe, setPaymentsInfos]);

    console.log(me);

    return (
        <div className="travel-page">
            <div>
                <h1>Olá, {me?.name}, {locale}</h1>
                <PaymentsMethods
                    paymentsInfos={paymentsInfos}
                />
            </div>
        </div>
    );
}