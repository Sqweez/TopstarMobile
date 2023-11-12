import {action, observable, computed, makeObservable} from "mobx";
import {createContext} from "react";
import ApiService from "../utils/ApiService";
import AsyncStorage from '@react-native-community/async-storage';
import STORAGE_KEYS from "../common/enums/STORAGE_KEYS";
import Notification from "../libs/Notification";
class AuthStore {
    @observable userToken = null;
    @observable user = null;
    @observable registrationRequested = false;
    @observable isAuthorized = false;

    constructor(props) {
        makeObservable(this);
    }


    apiService = new ApiService();

    @action setUserToken (token) {
        this.userToken = token;
    }

    @action async fetchUser () {
        try {
            this.user = await this.apiService.auth(this.userToken);
            this.isAuthorized = true;
        } catch (e) {
            this.user = null;
            this.userToken = null;
            this.isAuthorized = false;
            AsyncStorage.removeItem(STORAGE_KEYS.USER_TOKEN);
            throw e;
        }
    }

    @action async login (payload) {
        try {
            const response = await this.apiService.login(payload);
            this.setUserToken(response.token);
            await AsyncStorage.setItem(STORAGE_KEYS.USER_TOKEN, response.token);
            await this.fetchUser();
        } catch (e) {
            throw e;
        }
    }

    @action async updateProfile (payload) {
        try {
            this.user = await this.apiService.update(this.user.id, payload);
            this.setUserToken(this.user.token);
            AsyncStorage.setItem(STORAGE_KEYS.USER_TOKEN, this.userToken);
        } catch (e) {
            throw e;
        }
    }

    @action async register (payload) {
        try {
            this.user = await this.apiService.register(payload);
            this.setUserToken(this.user.token);
            AsyncStorage.setItem(STORAGE_KEYS.USER_TOKEN, this.userToken);
        } catch (e) {
            throw e;
        }
    }

    @action async requestRegistration (payload) {
        if (payload) {
            const data = await this.apiService.sendRequest(payload);
            if (data?.message) {
                Notification.success(data.message);
            }
        }
        this.registrationRequested = true;
    }

    @action async logout () {
        AsyncStorage.removeItem(STORAGE_KEYS.USER_TOKEN);
        this.user = null;
        this.userToken = null;
        this.isAuthorized = null;
        this.registrationRequested = false;
    }

    @computed get isLoggedIn () {
        return this.isAuthorized;
    }

    @computed get showMainPages () {
        return this.registrationRequested || this.isLoggedIn
    }

}

export default createContext(new AuthStore());
