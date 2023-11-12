import React, {useContext, useEffect, useState} from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'
import AuthStore from "../../../store/AuthStore";

const DrawerHeader = ({ navigation }) => {

    const authContext = useContext(AuthStore);
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(authContext.user)
    }, []);

    return (
       <TouchableOpacity style={styles.wrapper} activeOpacity={0.5} onPress={() => {navigation.navigate('Profile')}}>
           <View style={{...styles.container, justifyContent: 'space-between'}}>
               <View style={styles.container}>
                   <Image
                       style={styles.image}
                       source={require('./images/drawer_header.png')}
                   />
                   {user && <View style={styles.textWrapper}>
                       <Text style={styles.name}>{user.name}</Text>
                       <Text style={styles.settings}>Настройки</Text>
                   </View>}
               </View>
               <Image
                   style={styles.arrow}
                   source={require('./images/arrow_right.png')}
               />
           </View>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: 85,
        paddingVertical: 20,
        backgroundColor: '#212428',
        paddingLeft: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#5B636D',
    },
    image: {
        width: 46,
        height: 46,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textWrapper: {
        marginLeft: 19,
    },
    name: {
        color: '#fff',
        fontSize: 13,
    },
    settings: {
        color: '#5B636D',
        fontSize: 10
    },
    arrow: {
        width: 10,
        height: 10,
        marginRight: 16,
    }
});

export default DrawerHeader;
