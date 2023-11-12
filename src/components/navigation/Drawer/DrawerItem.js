import React, {useMemo} from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import {useNavigation, useNavigationState, useRoute} from '@react-navigation/native';

const DrawerItem = ({navigation, name, link, search}) => {

    const handlePress = () => {
        navigation.navigate(link, {
            search
        })
    }
    return (
        <TouchableOpacity onPress={handlePress} style={styles.container}>
            <Text style={styles.text} className='text-base'>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        paddingLeft: 40,
    },
    text: {
        color: '#fff',
        fontFamily: 'Montserrat_600SemiBold'
    }


})

export default DrawerItem;
