import { useState } from "react";

// imports
import { Checkbox, FormControlLabel } from '@material-ui/core';

export default function PaymentsMethods({ paymentsInfos }) {
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

    return(
        <div>
            {
                paymentsInfos && paymentsInfos.map((paymentInfo, index) => (
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
            }
        </div>
    );
}