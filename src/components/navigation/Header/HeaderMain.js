import React, {useContext, useEffect, useMemo} from 'react';
import {View, StyleSheet, Image, Text} from "react-native";
import { Appbar } from 'react-native-paper';
import MenuButton from "../Buttons/MenuButton";
import {useRoute} from '@react-navigation/native';
import BackButton from "../Buttons/BackButton";
import screenRoutes from "../../../routes/routes";
import modalRoutes from '../../../routes/routes.modal';
import {observer} from 'mobx-react-lite';
import store from '../../../store/FrontendStore';

const HeaderMain = ({ navigation }) => {
    const route = useRoute();
    const routes = [...screenRoutes, ...modalRoutes];
    const context = useContext(store);

  /*  useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            context.clearPageTitle();
        })
        return unsubscribe;
    }, [navigation]);*/

    const currentRoute = useMemo(() => {
        return routes.find(r => r.name === route.name);
    }, [route, routes]);

    const hasBack = useMemo(() => {
        return currentRoute.hasOwnProperty('hasBack') || !!route.params?.back;
    }, [currentRoute]);

    const showHeader = useMemo(() => {
        return currentRoute.hasOwnProperty('emptyLayout') ? !currentRoute.emptyLayout : true;
    }, [currentRoute]);

    const pageTitle = useMemo(() => {
        if (context.pageTitle) {
            return context.pageTitle;
        }
        return currentRoute.title;

    }, [context.pageTitle, currentRoute.title])


    const renderHeader = () => {
        return (
            <Appbar.Header style={[styles.headerWrapper, {
                paddingTop: 0,
                height: 50,
            }]}>
                <View className="flex flex-row items-center flex-1 relative">
                    <View className='absolute' style={{zIndex: 1}}>
                        {
                            hasBack ? <BackButton/> : <MenuButton />
                        }
                    </View>
                    <View className='flex flex-1 justify-center flex-row relative'>
                        {
                            !hasBack ?
                            <Image
                                style={{
                                    height: 18,
                                    width: 230
                                }}
                                resizeMode={'contain'}
                                source={require('./../../../../assets/images/header_logo.png')}
                            /> :
                                <View className={'flex-row text-center'}>
                                    <Text className='text-white text-base mb-1' style={{ fontFamily: 'Montserrat_600SemiBold' }}>
                                        { pageTitle }
                                    </Text>
                                </View>

                        }

                    </View>
                </View>
            </Appbar.Header>
        );
    }

    return showHeader ? renderHeader() : (<></>);
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: 'row',
        backgroundColor: '#000',
    },
    searchWrapper: {
        flex: 1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16,
        backgroundColor: '#131516',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 14,
        //borderWidth: 1,
        //borderColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4
        //box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    },
    searchInput: {
        marginLeft: 8,
        color: '#fff',
        fontFamily: 'Montserrat_400Regular',
        justifyContent: 'center',
        flex: 1,
    },
    headerNameWrapper: {
        flex: 1,
        //alignItems: 'center'
    },
    headerName: {
        textAlign: 'center',
        marginLeft: -48,
        color: '#fff',
        fontFamily: 'Montserrat_700Bold',
        fontSize: 16,
    },
});

export default observer(HeaderMain);
