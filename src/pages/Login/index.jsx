import { useState, useEffect } from 'react';

// imports
import UserService from '../../services/UserService';
import LogoImage from '../../assets/motorbike-logo.png';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import BackButton from '../../components/BackButton';

import './style.css';

const useStyles = makeStyles((theme) => ({
    button: {
        '& > *': {
            height: 45,
            width: '21em',
            fontSize: 22,
        },
    },
}));

export default function Login({ history, location }) {
    const classes = useStyles();

    const [cellPhone, setCellPhone] = useState();
    const [password, setPassword] = useState();

    const login = (event) => {
        const params = {
            cellPhone,
            password,
        };
        UserService.login(params)
            .then(() => history.replace('/app/dashboard'))
            .catch(error => console.log(error.message));
        event.preventDefault();
    }

	useEffect(() => {
		if (UserService.isAuthenticated()) history.push('/app/dashboard');
    }, [history]);

    return (
        <div className="signup-page container">
            <div>
                <BackButton />
            </div>
            <div className="signup-logo-area">
                <img className="signup-logo-img" src={LogoImage} alt="Motorbike Logotipo" />
            </div>
            <div className="signup-content">
                <form className="signup-content-form" onSubmit={login} autoComplete="on">
                    <TextField
                        label="Número de telefone"
                        onChange={(e) => setCellPhone(e.target.value)}
                        required
                        style={{ marginTop: 10 }}
                        className={classes.button}
                    />
                    <TextField
                        label="Senha"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        type="password"
                        style={{ marginTop: 10 }}
                        className={classes.button}
                    />
                    <button
                        className="signup-content-form-button"
                        type="submit"
                    > 
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}