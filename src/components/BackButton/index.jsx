import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router-dom';

export default function BackButton({
    to
}) {
    const history = useHistory();

    const handleBack = () => {
        if (to) return history.replace(to);
        return history.goBack();
    }

    return (
        <IconButton aria-label="cart" onClick={handleBack}>
            <ArrowBackIcon />
        </IconButton>
    );
}