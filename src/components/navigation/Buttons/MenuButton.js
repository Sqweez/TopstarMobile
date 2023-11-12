import React, {useMemo} from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {TouchableOpacity, StyleSheet, Image} from "react-native";
import COLORS from "../../../styles/COLORS";
import { Svg, Rect, Path } from 'react-native-svg';

export default function MenuButton ({ active = false, className = '' }) {
    const navigation = useNavigation();
    const onPressHandle = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());
    }

    const imageURL = useMemo(() => {
        if (active) {
            return require(`./../../../../assets/images/menu_icon-active.png`);
        } else {
            return require(`./../../../../assets/images/menu_icon.png`);
        }
    }, [active]);

    return (
        <TouchableOpacity onPress={onPressHandle} style={styles.menuButton} className={className}>
            <Svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Rect width="47" height="46" rx="12" fill="#090909"/>
                <Rect x="13" y="17" width="21" height="2" rx="1" fill={active ? '#BAD621' : 'white'}/>
                <Rect x="13" y="28" width="21" height="2" rx="1" fill={active ? '#BAD621' : 'white'} />
            </Svg>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    menuButton: {
        //width: 38,
        //height: 20,
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
