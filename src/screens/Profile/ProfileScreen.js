import React, {useContext, useEffect, useMemo, useState} from 'react'
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
import {Appbar} from 'react-native-paper';
import InvertedBackButton from '../../components/navigation/Buttons/InvertedBackButton';
import Animated from 'react-native-reanimated';
import {FontAwesome} from '@expo/vector-icons';
import COLORS from '../../styles/COLORS';
import {observer} from "mobx-react-lite";
import useLoader from "../../hooks/useLoader";
import ApiService from "../../utils/ApiService";
import {__hardcoded} from "../../helpers/functions";
import AuthStore from "../../store/AuthStore";
import Notification from '../../libs/Notification';
import {useNavigation} from "@react-navigation/native";

const ProfileScreen = () => {

    const loader = useLoader();
    const [profile, setProfile] = useState(null);
    const authContext = useContext(AuthStore);
    const navigation = useNavigation();


    useEffect(() => {
        const loadData = async () => {
            loader.enable();
            const response = await (new ApiService()).getProfile();
            setProfile(response.data);
            loader.disable();
        }

        if (authContext.isAuthorized) {
            loadData();
        } else {
            Notification.info('Данная страница будет доступна вам после регистрации!');
            navigation.goBack();
        }
    }, []);

    const activePrograms = useMemo(() => {
        if (!profile) {
            return [];
        }

        return profile.mobile_programs_with_details;

        return profile.programs.filter(p => {
            return true || !p.is_stopped && p.can_be_used || !p.is_activated;
        }).map(p => {

            const details = [
                `Тренер: ${p.last_trainer.name}`,
                `Действительно до: ${p.active_until}`,
                `Сделано посещений: ${p.visits_count}`
            ];

            if (p.type.id === __hardcoded(3)) {
                details.push(`Осталось посещений: ${p.remaining_visits}`)
            }

            return {
                id: p.id,
                title: p.name,
                details
            };
        });
    }, [profile]);

    const [openedAccordion, setOpenedAccordion] = useState(null);

    const _handleActivePress = (item) => {
        if (openedAccordion === item.id) {
            setOpenedAccordion(null)
        } else {
            setOpenedAccordion(item.id)
        }
    }

    const renderSubscriptions = (item) => {
        return (
            <ScrollView className='mb-5' key={item.id}>
                <TouchableOpacity onPress={() => _handleActivePress(item)} key={item.id}
                                  className={'flex-row items-center py-1 justify-between px-2'}>
                    <View className={'flex-row gap-x-2 items-center'}>
                        <View style={{width: 5, height: 5, backgroundColor: COLORS.accent, borderRadius: 100}}/>
                        <Text className={'text-white'} style={{color: '#fff', fontFamily: 'Montserrat_400Regular'}}>
                            {item.title}
                        </Text>
                    </View>
                    <FontAwesome name={openedAccordion === item.id ? 'chevron-down' : 'chevron-right'} size={16}
                                 color={COLORS.accent}/>
                </TouchableOpacity>
                {openedAccordion === item.id &&
                    <View className={'px-2 mt-2 ml-3'}>
                        {
                            item.details.map(detail => {
                                return (
                                    <View className={'flex-row gap-x-2 items-center'} key={detail}>
                                        <View style={{
                                            width: 5,
                                            height: 5,
                                            backgroundColor: COLORS.accent,
                                            borderRadius: 100
                                        }}/>
                                        <Text className={'text-white'}
                                              style={{color: '#fff', fontFamily: 'Montserrat_400Regular'}}>
                                            {detail}
                                        </Text>
                                    </View>
                                );
                            })
                        }
                    </View>
                }
            </ScrollView>
        );
    }

    const renderContent = () => {
        return (
            <>
                <Appbar.Header style={[styles.headerWrapper]}>
                    <View className='absolute' style={{left: 4}}>
                        <InvertedBackButton/>
                    </View>
                    <View className={'flex-1'}>
                        <Text
                            className={'font-semibold text-center'}
                            style={{fontFamily: 'Montserrat_700Bold', fontSize: 18}}
                        >
                            Мой профиль
                        </Text>
                    </View>
                </Appbar.Header>
                <View style={{
                    position: 'relative',
                    backgroundColor: '#98B200',
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30
                }} className={'py-4 flex flex-col items-center justify-center'}>
                    <Animated.Image
                        source={{uri: profile.photo}}
                        resizeMode='cover'
                        style={{
                            width: 150,
                            height: 150,
                            borderRadius: 19
                        }}
                    />
                    <Text style={{fontFamily: 'Montserrat_600SemiBold', fontSize: 20, marginTop: 26,}}>
                        {profile.name}
                    </Text>
                    <Text style={{fontFamily: 'Montserrat_500Medium', fontSize: 16, marginTop: 4,}}>
                        {profile.age_full}
                    </Text>
                </View>
                <View style={{marginTop: 27}}>
                    <Text style={{fontFamily: 'Montserrat_400Regular',}} className={'text-white text-center text-sm'}>
                        Активные программы ({activePrograms.length})
                    </Text>
                    <ScrollView
                        style={{marginTop: 22}}
                        contentInsetAdjustmentBehavior="automatic">
                        {activePrograms.map(item => renderSubscriptions(item))}
                    </ScrollView>
                </View>
            </>
        );
    }

    return profile === null ? <></> : renderContent();
}

const styles = StyleSheet.create({
    headerWrapper: {
        flexDirection: 'row',
        backgroundColor: '#98B200',
        alignItems: 'center',
        position: 'relative'
    },
})

export default observer(ProfileScreen);
