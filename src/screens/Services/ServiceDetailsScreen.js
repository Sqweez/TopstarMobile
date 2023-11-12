import React, {useContext, useEffect, useState} from 'react'
import {View, Text, ScrollView} from 'react-native';
import FrontendStore from '../../store/FrontendStore';
import MainLayout from '../../layouts/MainLayout';
import COLORS from '../../styles/COLORS';

const ServiceDetailsScreen = ({route}) => {
    const frontContext = useContext(FrontendStore);

    useEffect(() => {
        frontContext.setPageTitle(route.params.name)
        return () => {
            frontContext.clearPageTitle();
        }
    }, [])

    return (
        <MainLayout>
            <ScrollView className={'py-4 px-4'}>
                <Text className={'text-white uppercase text-sm'} style={{fontFamily: 'Montserrat_400Regular'}}>
                    {route.params.name}
                </Text>
                <Text
                    className={'text-sm mt-4'}
                    style={{fontFamily: 'Montserrat_400Regular', color: COLORS.accent}}
                >
                    О тренировке:
                </Text>
                <Text className={'text-white text-sm py-3'} style={{fontFamily: 'Montserrat_400Regular'}}>
                    Зумба – групповые занятия, благодаря чему энергетические импульсы передаются от одного участника к
                    другому, тем самым обеспечивая более эффективный результат. Тренировка проводится под ритмы
                    популярной латиноамериканской музыки, что гарантирует отличное настроение и позитивный настрой.
                </Text>
            </ScrollView>
        </MainLayout>
    );
}

export default ServiceDetailsScreen
