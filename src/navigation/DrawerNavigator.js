import React, {useContext, useEffect, useMemo, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../components/navigation/Drawer/DrawerContent';
import Routes from './../routes/routes';
import ModalRoutes from './../routes/routes.modal';
import HeaderMain from "../components/navigation/Header/HeaderMain";
import {createStackNavigator} from "@react-navigation/stack";
import {View} from 'react-native';
import COLORS from "../styles/COLORS";
import AuthStore from "../store/AuthStore";
import GuestRoutes from '../routes/guest-routes';
import {observer} from 'mobx-react-lite';
import Loader from '../components/utils/Loader';

const Stack = createStackNavigator();

const StackNavigator = observer(() => {

    const authContext = useContext(AuthStore);

    return (
        <View style={{flex: 1, backgroundColor: COLORS.primary}}>
            <Stack.Navigator>
                {authContext.showMainPages && (
                    <Stack.Group navigationKey='not-guest'>
                        {
                            Routes.map((item, key) =>
                                (<Stack.Screen
                                    name={item.name}
                                    component={item.component}
                                    options={{header: props => <HeaderMain {...props}/>}}
                                    key={`${item.name}-${key}`}
                                />)
                            )
                        }
                    </Stack.Group>
                )}
                {!authContext.showMainPages && (
                    <Stack.Group navigationKey='guest'>
                        {
                            GuestRoutes.map((item, key) =>
                                (<Stack.Screen
                                    name={item.name}
                                    component={item.component}
                                    options={{headerShown: false}}
                                    key={`${item.name}-${key}`}
                                />)
                            )
                        }
                    </Stack.Group>
                )}
                <Stack.Group navigationKey={authContext.showMainPages ? 'user' : 'guest'} screenOptions={{presentation: 'modal'}}>
                    {ModalRoutes.map((item, key) =>
                        (<Stack.Screen
                            name={item.name}
                            component={item.component}
                            options={{header: props => <HeaderMain {...props}/>}}
                            key={`${item.name}-${key}`}
                        />)
                    )}
                </Stack.Group>
            </Stack.Navigator>
        </View>
    );
});

const Drawer = createDrawerNavigator();

const DrawerNavigator = (props) => {
    return (
        <Drawer.Navigator
            headerContent={() => <></>}
            drawerContent={props => <DrawerContent {...props} />}
        >
            <Drawer.Screen name="Screens" component={StackNavigator} options={{
                header: () => {
                }
            }}/>
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;
