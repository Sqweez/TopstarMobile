import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {TouchableOpacity, StyleSheet, Image} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import COLORS from "../../../styles/COLORS";
import {Path, Svg, Rect} from 'react-native-svg';
export default function InvertedBackButton (props) {

    const navigation = useNavigation();
    const route = useRoute();

    const onPressHandle = () => {
        navigation.canGoBack
            ? navigation.goBack()
            : route.params?.back ? navigation.navigate(route.params.back) : navigation.navigate('Home')
    }
    return (
        <TouchableOpacity onPress={onPressHandle} style={styles.menuButton}>
            <Svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Rect width="47" height="46" rx="12" fill="#111111"/>
                <Path d="M32 21.9999L16.4141 21.9999L21.7071 16.7069C22.0976 16.3164 22.0976 15.6834 21.7071 15.2929C21.3166 14.9024 20.6833 14.9024 20.2928 15.2929L13.2929 22.2929C12.9024 22.6834 12.9024 23.3167 13.2929 23.7069L20.2928 30.707C20.4881 30.9023 20.7441 31 21.0001 31C21.2558 31 21.5118 30.9023 21.7071 30.707C22.0976 30.3165 22.0976 29.6832 21.7071 29.293L16.4141 23.9999L32 23.9999C32.552 23.9999 33 23.5522 33 22.9999C33 22.4477 32.5523 21.9999 32 21.9999Z" fill="#BAD621"/>
            </Svg>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    menuButton: {
        width: 47,
        height: 46,
        marginHorizontal: 16,
        overflow: 'visible',
        marginBottom: 4,
        zIndex: 2,
    },
    menuIcon: {
        color: COLORS.accent,
        flex: 1,
    }
})
