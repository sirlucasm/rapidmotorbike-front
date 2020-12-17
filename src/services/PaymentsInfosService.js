import API from '../configs/axios';

class PaymentsInfosService {
    create = async (params) => {
        try{
            return await API.post('/paymentsInfos', params);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    fetchPaymentsInfos = async (user) => {
        try {
            const loggedUser = JSON.parse(localStorage.getItem('loggedIn'));
            return await API.post(`/myPaymentsInfos`, { id: loggedUser.id });
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

export default new PaymentsInfosService();