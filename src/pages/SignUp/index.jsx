import { useState, useEffect } from 'react';

// imports
import UserService from '../../services/UserService';
import LogoImage from '../../assets/motorbike-logo.png';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import BackButton from '../../components/BackButton';
import queryString from 'query-string';

import './style.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    button: {
        '& > *': {
            height: 45,
            width: '21em',
            fontSize: 22,
        },
    },
}));

export default function SignUp({ history, location }) {
    const classes = useStyles();
    const { search } = location.search.split('?');
    const { t } = queryString.parse(search);
    const typeUser = t;

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [cellPhone, setCellPhone] = useState();
    const [password, setPassword] = useState();
    const [userType] = useState(typeUser);
    const [birthDate, setBirthDate] = useState();

    const signup = (event) => {
        const params = {
            name,
            email,
            cellPhone,
            password,
            userType,
            birthDate
        };
        
        UserService.verifyCellNumber(params.cellPhone)
            .then(res => {
                if (res.data.valid) {
                    UserService.create(params)
                        .then(() => history.replace('/app/dashboard'))
                        .catch(error => console.log(error.message));
                } else {
                    alert("Número não existe");
                }
            })
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
                <form className="signup-content-form" onSubmit={signup} autoComplete="on">
                    <TextField
                        label="Número de telefone"
                        onChange={(e) => setCellPhone(e.target.value)}
                        required
                        style={{ marginTop: 10 }}
                        className={classes.button}
                    />
                    <TextField
                        label="Nome"
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={{ marginTop: 10 }}
                        className={classes.button}
                    />
                    <TextField
                        label="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        type="email"
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
                    <TextField
                        onChange={(e) => setBirthDate(e.target.value)}
                        required
                        type="date"
                        style={{ marginTop: 20 }}
                        className={classes.button}
                    />
                    <button
                        className="signup-content-form-button"
                        type="submit"
                    > 
                        Criar conta
                    </button>
                    <Link to="/app/login">Ou logue agora com sua conta existente</Link>
                </form>
            </div>
        </div>
    );
}