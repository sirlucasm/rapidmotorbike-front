import { useState, useEffect } from 'react';

// imports
import UserService from '../../services/UserService';
import LogoImage from '../../assets/motorbike-logo.png';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import BackButton from '../../components/BackButton';
import queryString from 'query-string';

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

export default function SignUp({ history, location }) {
    const classes = useStyles();
    const { search } = location.search.split('?');
    const { t } = queryString.parse(search);
    const typeUser = t;

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [cellPhone, setCellPhone] = useState();
    const [password, setPassword] = useState();
    const [userType, setUserType] = useState();
    const [address, setAddress] = useState();
    const [birthDate, setBirthDate] = useState();

    const [addAddress, setAddAddress] = useState(false);

    const signup = (event) => {
        const params = {
            name,
            email,
            cell_phone: cellPhone,
            password,
            user_type: userType,
            address,
            birth_date: birthDate
        };
        if (!addAddress) delete params.address;
        
        UserService.verifyCellNumber(params.cell_phone)
        
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
                <div className="signup-content-form" autoComplete="on">
                    <TextField
                        id="standard-basic"
                        label="Número de telefone"
                        onChange={(e) => setCellPhone(e.target.value)}
                        required
                        className={classes.button}
                    />
                    <button
                        className="signup-content-form-button"
                        onClick={signup}
                    > 
                        Criar conta
                    </button>
                </div>
            </div>
        </div>
    );
}