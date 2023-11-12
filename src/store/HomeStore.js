import {action, observable} from "mobx";
import ApiService from "../utils/ApiService";
import {createContext} from "react";

class HomeStore {
    @observable types = [];
    @observable allTypes = [];
    @observable homeStocks = [
        {
            title: '1',
            image: require('./../../assets/images/carousel/1.jpg'),
        },
        {
            title: '2',
            image: require('./../../assets/images/carousel/2.jpg'),
        },
        {
            title: '3',
            image: require('./../../assets/images/carousel/3.jpg'),
        },
        {
            title: '4',
            image: require('./../../assets/images/carousel/4.jpg'),
        },
    ];
    @observable categories = [];

    ApiService = new ApiService();

    @action async getHomeTypes () {
        this.types = await this.ApiService.getHomeTypes();
    }

    @action async getTypes () {
        this.allTypes = await this.ApiService.getTypes();
    }

    @action async getHomeStocks () {
       // this.homeStocks = await this.ApiService.getHomeStocks();
    }

    @action async getCategories () {
        this.categories = await this.ApiService.getCategories();
    }
}

export default createContext(new HomeStore());
