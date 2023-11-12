import React, {useCallback, useContext} from 'react';
import {observer} from 'mobx-react-lite';
import FrontendStore from '../store/FrontendStore';

const useLoader = (callback, deps) => {
    const frontendStore = useContext(FrontendStore);

    const enable = useCallback(() => {
        return frontendStore.enableLoading();
    }, deps);

    const disable = useCallback(() => {
        return frontendStore.disableLoading();
    }, deps);

    return {
        enable, disable
    };
}

export default useLoader;
