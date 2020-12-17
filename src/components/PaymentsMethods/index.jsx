import { useState } from "react";

// imports
import { Checkbox, FormControlLabel, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default function PaymentsMethods({ paymentsInfos }) {
    const history = useHistory();
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const statusPaymentTypes = (status) => {
        if (status === 0) return "Dinheiro";
        if (status === 1) return "Débito";
        if (status === 2) return "Crédito";
        if (status === 3) return "Pix";
    }

    const handleLinkURL = (url) => {
        history.push(url)
    }

    return(
        <div>
            {
                paymentsInfos ? paymentsInfos.map((paymentInfo, index) => (
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                color="primary"
                                inputProps={{ 'aria-label': 'checkbox' }}
                            />
                        }
                        label={statusPaymentTypes(paymentInfo.payment_type)}
                    />
                ))
                :
                <div style={{ textAlign: 'center', }}>
                    <div style={{ marginTop: 15, }}>
                        <span>Nenhum método adicionado ainda</span>
                    </div>
                    <Button
                        color="secondary"
                        style={{ marginTop: 10, }}
                        onClick={() => handleLinkURL('/app/payments-info/add')}
                    >
                        Adicionar nova forma de pagamento
                    </Button>
                </div>
            }
        </div>
    );
}