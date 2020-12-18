import { useState, useRef } from "react";

// imports
import { Checkbox, FormControlLabel } from '@material-ui/core';
import './style.css';
import BackButton from "../../components/BackButton";

export default function PaymentsInfos() {
    const [checked, setChecked] = useState({
        checked0: false,
        checked1: false,
        checked2: false,
        checked3: false,
    });
    const [selected, setSelected] = useState();

    const handleChange = (value) => (event) => {
        selectAnPayment(value);
        setChecked({[event.target.name]: event.target.checked });
    };

    const PAYMENTS_METHODS = [
        "Dinheiro",
        "Débito",
        "Crédito",
        "Pix"
    ];

    const statusPaymentTypes = (status) => {
        if (status === "Dinheiro") return 0;
        if (status === "Débito") return 1;
        if (status === "Crédito") return 2;
        if (status === "Pix") return 3;
    }

    const selectAnPayment = (value) => {
        setSelected(value);
    }

    return(
        <div className="container">
            <BackButton />
            <div className="payments-infos-header">
                <div className="row justify-content-center payments-infos-header-title">
                    <h4>Escolha a forma de pagamento que deseja adicionar</h4>
                </div>
                <div className="mt-4">
                    {
                        PAYMENTS_METHODS.map((paymentMethod, index) => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={checked[`checked${index}`]}
                                        color="primary"
                                        onChange={handleChange(paymentMethod)}
                                        name={`checked${index}`}
                                    />
                                }
                                label={paymentMethod}
                                key={index}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="payments-infos-content">
                <div>
                    <span>Você escolheu {selected}</span>
                </div>
                <div>
                    <span className="payments-infos-fill-required">* Preencha todos os campos para cadastrar</span>
                </div>
            </div>
        </div>
    );
}