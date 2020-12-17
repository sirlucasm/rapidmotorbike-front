import API from '../configs/axios';

class UserService {
    create = async (params) => {
        try{
            if (params) {
                const user = await API.post('/users', params);
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
            if (user.data) {
                localStorage.setItem('loggedIn', JSON.stringify(user.data));
                return user;
            } return Promise.reject({
                message: "Alguma credencial está incorreta"
            });
        } catch (error) {
            return Promise.reject(error);
        }
    }

    fetchLoggedUser = async () => {
        try {
            if (this.isAuthenticated()) {
                const loggedUser = JSON.parse(localStorage.getItem('loggedIn'));
                return await API.post('/users/me', { id: loggedUser.id });
            } return Promise.reject({
                message: "Você não está logado"
            });
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

    searchAddressGeocoding = async (address) => {
        try {
            const secretKey = "pk.eyJ1Ijoic2lybHVjYXNtIiwiYSI6ImNraXFzbXIwdzBoam0yemxydTluM2FydnUifQ.QGykGf9MBJk_rwqKPGHx6g";
            const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${secretKey}`;

            return await API.get(url);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    getCurrentCoordinates = () => {
        return JSON.parse(localStorage.getItem('coordinates'));
    }

    getCurrentLocale = () => {
        return localStorage.getItem('locale');
    }

    fetchPilots = async () => {
        try {
            return await API.get('/users/userType/1');
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

export default new UserService();