import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';

const TabItem = ({icon, icon_active, to}) => {
    const navigation = useNavigation();
    const { name } = useRoute();
    const isActive = name === to;

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(to)}
            style={{
                ...styles.wrapper,
            }}>
            <View>
                <Image
                    source={isActive ? icon_active : icon}
                    style={{
                        ...styles.icon
                    }}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        //overflow: 'hidden'
    },
    icon: {
        width: 23,
        height: 22,
    }
})

export default TabItem;
