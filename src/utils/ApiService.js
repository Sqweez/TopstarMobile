import axiosClient from "./../base/axios/AxiosClient";

export default class ApiService {

    axios = new axiosClient()

    async auth () {
        try {
            const { data } = await this.axios.get({
                url: 'v1/auth/me',
            });
            console.log(data);
            return data;
        } catch (e) {
            throw e;
        }
    }

    async login (payload) {
        try {
            const { data } = await this.axios.post({
                url: 'v1/auth/login',
                data: payload
            });
            return data;
        } catch (e) {
            throw e;
        }
    }

    async getProfile () {
        try {
            const { data } = await this.axios.get({
                url: 'v1/profile'
            });
            console.log(data);
            return data;
        } catch (e) {
            throw e;
        }
    }

    async sendRequest (payload) {
        try {
            const {data} = await this.axios.post({
                url: 'v1/request',
                data: payload,
            })
            return data;
        } catch (e) {
            throw e;
        }
    }
}
