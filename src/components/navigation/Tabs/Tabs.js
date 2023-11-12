import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';
import { BlurView } from 'expo-blur';
import TabItem from "./TabItem";

const Tabs = () => {
    return (
        <View style={styles.wrapper}>
            <TabItem
                icon={require('./images/goods.png')}
                icon_active={require('./images/goods_active.png')}
                to='Orders'/>
            <TabItem
                icon={require('./images/heart.png')}
                icon_active={require('./images/heart_active.png')}
                to='Favorites'/>
            <TabItem
                icon={require('./images/home.png')}
                icon_active={require('./images/home_active.png')}
                to='Home'/>
            <TabItem
                icon={require('./images/cart.png')}
                icon_active={require('./images/cart_active.png')}
                to='Cart' />
            <TabItem
                icon={require('./images/list.png')}
                icon_active={require('./images/list_active.png')}
                to='Orders'/>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        height: 66,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 5,
        width: '97%',
        backgroundColor: '#212428',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 25,
        marginLeft: '1.5%',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 4,
        elevation: 2,
    },
})

export default Tabs;
