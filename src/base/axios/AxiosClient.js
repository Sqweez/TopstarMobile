import axios from 'axios';
import {appConfig} from '../../appConfig';
import {Platform} from 'react-native';
import Notification from '../../libs/Notification';
import AsyncStorage from "@react-native-community/async-storage";
import STORAGE_KEYS from "../../common/enums/STORAGE_KEYS";

export default class AxiosClient {
    api;

    constructor(config) {
        this.api = axios.create(config);
        this.api.defaults.baseURL = appConfig.apiUrl + 'api/mobile/';
        this.api.defaults.headers.accept = 'application/json';
        this.setInterceptorsRequest();
        this.setInterceptorResponse();
    }

    setAccessToken(token) {
        this.api.defaults.headers['T-Authorization'] = token;
    }

    clearAccessToken(token) {
        this.api.defaults.headers.common.Authorization = '';
    }

    get = (config) => {
        return this.api.get(config.url, config.config);
    };

    post = (config) => {
        return this.api.post(config.url, config.data, config.config)
    }

    patch = (config) => {
        return this.api.patch(config.url, config.data, config.config)
    }

    put = (config) => {
        return this.api.patch(config.url, config.data, config.config)
    }

    delete = (config) => {
        return this.api.get(config.url, config.config);
    };


    setInterceptorsRequest() {
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        this.api.interceptors.request.use(
            async config => {
                const value = await AsyncStorage.getItem(STORAGE_KEYS.USER_TOKEN);
                return {
                    ...config,
                    headers: {
                        'Content-Type': 'application/json',
                        'App-Platform': Platform.OS,
                        'App-Version': appConfig.version,
                        'Accept-Timezone': timeZone,
                        ...config.headers,
                        'T-Authorization': value ? value : null,
                    },
                };
            },
            (error) => {
                return Promise.reject(error);
            },
        );

    }

    setInterceptorResponse = () => {
        this.api.interceptors.response.use(
            response => {
                return response;
            },
            error => {
                console.log(error.response.data.message);
                let errMessage = error?.response?.data?.message
                Notification.error(errMessage ? errMessage : 'Произошла ошибка :(')
                return Promise.reject(error);
            },
        );
    };

}
