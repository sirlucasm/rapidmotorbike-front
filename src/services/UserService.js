import API from '../configs/axios';

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
}

export default new UserService();