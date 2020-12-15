import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router-dom';

export default function BackButton() {
    const history = useHistory();

    const handleBack = () => {
        history.replace('/');
    }

    return (
        <IconButton aria-label="cart" onClick={handleBack}>
            <ArrowBackIcon />
        </IconButton>
    );
}