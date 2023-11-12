import React, {useContext, useEffect} from 'react';
import AuthStore from "../store/AuthStore";
import { View, Text } from 'react-native';
const Logout = () => {
    const authContext = useContext(AuthStore);

    useEffect(async () => {
        await authContext.logout();
    }, []);

    return <View>
        <Text>Выход</Text>
    </View>;
}

export default Logout;
