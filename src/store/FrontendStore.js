import {action, makeObservable, observable} from "mobx";
import {createContext} from "react";

class FrontendStore {
    @observable isLoading = false;
    @observable pageTitle = null;

    constructor() {
        makeObservable(this);
    }

    @action enableLoading () {
        this.isLoading = true;
    }

    @action disableLoading () {
        this.isLoading = false;
    }

    @action setPageTitle (title) {
        this.pageTitle = title;
    }

    @action clearPageTitle () {
        this.pageTitle = null;
    }
}

export default createContext(new FrontendStore());
