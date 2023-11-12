import {action, observable} from "mobx";
import ApiService from "../utils/ApiService";
import {createContext} from "react";

class ProductStore {
    @observable products = [];
    @observable cities = [];
    @observable cityId = null;
    @observable searchText = '';

    ApiService = new ApiService();

    @action async getProductsByType (type_id, city_id) {
        this.products = [];
        console.log('GET_PRODUCTS_BY_TYPE');
        console.log('TYPE_ID ' + type_id);
        this.products = await this.ApiService.getProductsByType(type_id, city_id);
    }
    @action async getProductsByCategory (category_id, city_id) {
        this.products = [];
        this.products = await this.ApiService.getProductsByCategory(category_id, city_id);
    }

    @action async getProductsBySearch (search, city_id) {
        this.products = [];
        this.products = await this.ApiService.getProductsBySearch(search, city_id);
    }

    @action async getCities () {
        this.cities = await this.ApiService.getCities();
    }

    @action setCityId (cityId) {
        this.cityId = cityId;
    }

    @action setSearchText (value) {
        console.log('setting search');
        this.searchText = value;
    }
}

export default createContext(new ProductStore());
