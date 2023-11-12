import React, {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {View, Text, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
import Animated from 'react-native-reanimated';
import COLORS from '../../styles/COLORS';
import useLoader from '../../hooks/useLoader';
import {useNavigation} from '@react-navigation/native';
import REQUEST_CALLBACK_TYPES from '../../common/enums/REQUEST_CALLBACK_TYPES';


const TeamMemberScreen = ({route}) => {

    const {id, image, name, position} = route.params;
    const width = Dimensions.get('window').width;
    const loader = useLoader();
    const navigator = useNavigation();

    const handleEnroll = () => {
        navigator.navigate('RequestCallBackScreen', {
            title: 'Запишитесь на персональную тренировку, оставив свои персональные данные',
            type: REQUEST_CALLBACK_TYPES.TYPE_ENROLL_TRAINER
        })
    }

    const handleChat = () => {
        navigator.navigate('RequestCallBackScreen', {
            title: 'Оставьте свои данные и тренер свяжется с вами в скором времени',
            type: REQUEST_CALLBACK_TYPES.TYPE_CHAT_TRAINER
        })
    }

    useEffect(() => {
        loader.enable();
        setTimeout(() => {
            loader.disable();
        }, 2000);
    }, []);

    return (
        <ScrollView style={{flex: 1}}>
            <Animated.Image
                className='mt-4'
                style={{width: width, height: width}}
                source={image}
                resizeMode='cover'
            />
            <View className={'flex flex-col py-4 px-5'}>
                <Text className='text-white text-2xl' style={{fontFamily: 'Montserrat_600SemiBold'}}>
                    Берендеев Никита
                </Text>
                <Text className='' style={{fontFamily: 'Montserrat_500Medium', color: COLORS.accent}}>
                    Тренер эксперт
                </Text>
                <Text className={'mt-3 text-white'} style={{ fontFamily: 'Montserrat_400Regular', textAlign: 'justify' }}>
                    Мастер спорта международного класса по спортивной акробатике. Многократная чемпионка РК, чемпионка
                    Азии по спортивной акробатике. Образование высшее. Сертифицированный тренер школы “ITS”. Инструктор
                    групповых программ и персональный тренер.
                </Text>
                <TouchableOpacity onPress={handleChat} className='py-4 w-full text-center rounded-xl shadow-xl mt-3 mb-2'>
                    <Text className='text-center' style={{ fontFamily: 'Montserrat_400Regular', color: COLORS.accent }}>
                        Перейти в чат
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleEnroll} className='py-4 w-full text-center rounded-xl shadow-xl mb-2' style={{ backgroundColor: COLORS.accent }}>
                    <Text  className='text-center' style={{ fontFamily: 'Montserrat_400Regular'}}>
                        Записаться
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default observer(TeamMemberScreen);
