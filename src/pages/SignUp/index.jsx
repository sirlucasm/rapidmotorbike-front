import { useEffect } from 'react';

// imports
import UserService from '../../services/UserService';

export default function SignUp({ history, location }) {
    let t = location.search.split('?');
    const typeUser = t[1].split('=')[1];

	useEffect(() => {
		if (UserService.isAuthenticated()) history.push('/app/dashboard');
    }, [history]);
    
    console.log()

    return (
        <div className="signup-page signup-background">
            SignUp type = {typeUser}
        </div>
    );
}