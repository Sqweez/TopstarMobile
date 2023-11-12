import React from 'react';
import {View, ImageBackground, Text, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import COLORS from '../../styles/COLORS';

const NewsCard = ({item, onPress}) => {
    return (
        <TouchableOpacity activeOpacity={.6} className={'w-full mb-4'} onPress={onPress}>
            <ImageBackground
                className={'w-full rounded-2xl overflow-hidden relative'}
                style={{height: 240, backgroundColor: '#000000c0'}}
                source={{uri: item.image}}
                resizeMode='cover'
            >
                <LinearGradient
                    colors={['#00000000', '#000000']}
                    style={{height: '100%', width: '100%'}}
                />
                <View className={'absolute bottom-0 left-0 right-0 px-3 pb-1'}>
                    <Text style={{ color: COLORS.accent, fontFamily: 'Montserrat_500Medium' }}>
                        { item.title }
                    </Text>
                    <Text style={{ color: 'white', fontFamily: 'Montserrat_400Regular'}}>
                        { item.short_description }
                    </Text>
                </View>
            </ImageBackground>
            <Text className={'text-gray-400 text-right mt-1'} style={{ fontFamily: 'Montserrat_400Regular' }}>
                { item.date_formatted }
            </Text>
        </TouchableOpacity>
    );
}

export default NewsCard;
