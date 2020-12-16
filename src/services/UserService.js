import API from '../configs/axios';

class UserService {
    create = async (params) => {
        try{
            const user = await API.post('/users', params);
            if (params) {
                localStorage.setItem('loggedIn', true);
                return user;
            } return false;
        } catch (error) {
            return Promise.reject(error);
        }
    }

    login = async (params) => {
        try{
            const user = await API.post('/users/login', params);
            if (user.data.length > 0) {
                localStorage.setItem('loggedIn', true);
                return user;
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

    verifyCellNumber = async (number) => {
        try {
            const secretKey = "6c277be944537bf4d2a0ea46af1ee216";
            const countryCode = "BR";
            const url = `http://apilayer.net/api/validate?access_key=${secretKey}&number=${number}&country_code=${countryCode}&format=1`;

            return await API.get(url);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    logout = async () => {
        localStorage.removeItem('loggedIn');
    }
}

export default new UserService();