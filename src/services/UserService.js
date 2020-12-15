import API from '../configs/axios';
import Nexmo from 'nexmo';

class UserService {
    login = async (params) => {
        try{
            const user = API.post('/user/login', params);
            if (user.data) {
                localStorage.setItem('loggedIn', true);
                return user.data;
            } return false;
        } catch (error) {
            return Promise.reject(error);
        }
    }

    isAuthenticated = () => {
        const logged = localStorage.getItem('loggedIn');
        if (logged) return true;
        return false;
    }

    verifyCellNumber = (number) => {
        
        const nexmo = new Nexmo({
            apiKey: '1c161e13',
            apiSecret: 'wtmm96Aty3N4UbDf',
        });

        const from = 'Vonage APIs';
        const to = `55${number}`;
        const text = 'Hello from Vonage SMS API';

        nexmo.message.sendSms(from, to, text);
    }
}

export default new UserService();