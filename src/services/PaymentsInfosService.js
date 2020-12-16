import API from '../configs/axios';

class PaymentsInfosService {
    create = async (params) => {
        try{
            return await API.post('/paymentsInfos', params);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    fetchPaymentsInfos = async (userId) => {
        try {
            return await API.post(`/myPaymentsInfos`, userId);
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

export default new PaymentsInfosService();