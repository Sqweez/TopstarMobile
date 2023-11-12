import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {DrawerContentScrollView} from "@react-navigation/drawer";
import DrawerContentStyles from '../../../styles/components/DrawerContentStyles';
import {
    Drawer
} from 'react-native-paper';
import DrawerItem from './DrawerItem';
import routes from '../../../routes/routes.side';
import MenuButton from '../Buttons/MenuButton';
import {observer} from "mobx-react-lite";
import AuthStore from "../../../store/AuthStore";

const DrawerContent = (props) => {
    return (
        <View style={DrawerContentStyles.wrapper}>
            <DrawerContentScrollView {...props}>
                <Drawer.Section style={{flex: 1}} className='pl-1'>
                    <MenuButton active={true} className={'-ml-2'} />
                    <View className='mt-5'>
                        {routes.map((item, key) => {
                            return <DrawerItem
                                navigation={props.navigation}
                                name={item.title}
                                link={item.name}
                                key={`drawer-item-${key}`}
                            />
                        })}
                    </View>
                </Drawer.Section>
            </DrawerContentScrollView>
        </View>
    );
};

export default observer(DrawerContent);
