import React, {useContext, useEffect, useState} from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'
import AuthStore from "../../../store/AuthStore";
import {observer} from "mobx-react-lite";

const DrawerSubHeader = ({navigation}) => {
    const authContext = useContext(AuthStore);
    const [user, setUser] = useState(null);
    useEffect(() => {
        setUser(authContext.user);
    }, [authContext.user]);

    return (<TouchableOpacity style={styles.wrapper} activeOpacity={0.5} onPress={() => {
        navigation.navigate('CityChange')
    }}>
        <View style={{...styles.container, justifyContent: 'space-between'}}>
            <View style={styles.container}>
                <Image
                    style={styles.location}
                    source={require('./images/location.png')}
                />
                {user && <Text style={styles.city}>
                    {user?.city?.name ?? 'Неизвестно'}
                </Text>}
            </View>
            <Image
                style={styles.arrow}
                source={require('./images/arrow_right.png')}
            />
        </View>
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    wrapper: {
        height: 47,
        paddingVertical: 15,
        backgroundColor: '#212428',
        paddingLeft: 39,
        borderBottomWidth: 1,
        borderBottomColor: '#5B636D',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    location: {
        width: 18,
        height: 18
    },
    city: {
        marginLeft: 33,
        fontSize: 13,
        color: '#fff',
    },
    arrow: {
        width: 10,
        height: 10,
        marginRight: 16,
    }
});

export default observer(DrawerSubHeader);
