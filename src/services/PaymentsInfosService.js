import API from '../configs/axios';

class PaymentsInfosService {
    create = async (params) => {
        try{
            return await API.post('/payments-infos', params);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    fetchPaymentsInfos = async (userId) => {
        try {
            return await API.post(`/my-payments-infos`, userId);
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

export default new PaymentsInfosService();