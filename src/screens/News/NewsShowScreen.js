import React, {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {Dimensions, Text, ScrollView, View} from 'react-native';
import useLoader from '../../hooks/useLoader';
import Animated from 'react-native-reanimated';
import COLORS from '../../styles/COLORS';

const NewsShowScreen = ({ route }) => {
    const news = route.params;
    const width = Dimensions.get('window').width;

    const loader = useLoader();

    useEffect(() => {
        loader.enable();
        setTimeout(() => {
            loader.disable();
        }, 2000);
    }, []);

    return (
        <ScrollView style={{flex: 1}} className={'px-5'}>
            <Animated.Image
                className='mt-4 rounded-xl overflow-hidden'
                style={{width: width, aspectRatio: 16/9}}
                source={{ uri: news.image }}
                resizeMode='cover'
            />
            <View className={'flex flex-col mt-4'}>
                <Text className='text-white text-2xl' style={{fontFamily: 'Montserrat_600SemiBold', color: COLORS.accent}}>
                    { news.title }
                </Text>
                <Text className={'mt-3 text-white'} style={{ fontFamily: 'Montserrat_400Regular', textAlign: 'justify' }}>
                    { news.description }
                </Text>
            </View>
        </ScrollView>
    );
}

export default observer(NewsShowScreen);
