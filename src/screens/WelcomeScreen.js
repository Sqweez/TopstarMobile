import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import COLORS from '../styles/COLORS';
import { useNavigation } from '@react-navigation/native';
import AuthStore from '../store/AuthStore';

const WelcomeScreen = () => {

    const navigation = useNavigation();

    const _navigateToLogin = () => {
        navigation.navigate('Login');
    };

    const _navigateToRegister = () => {
        navigation.navigate('RequestRegistrationCallModal');
    }

    return (
        <View className="flex justify-center items-center h-full w-full">
            <View className="w-full flex flex-col items-center px-8">
                <Text className="text-white text-base" style={{fontFamily: 'Montserrat_400Regular'}}>
                    Вы являетесь членом клуба?
                </Text>
                <View className="flex flex-row mt-4 gap-x-4">
                    <TouchableOpacity onPress={_navigateToRegister} activeOpacity={0.6} className="flex-1 w-full py-3 flex justify-center items-center rounded-xl" style={{backgroundColor: COLORS.grey}}>
                        <Text className="text-white" style={{color: COLORS.accent}}>
                            Нет
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={_navigateToLogin} activeOpacity={0.6} className="flex-1 w-full py-3 flex justify-center items-center rounded-xl" style={{backgroundColor: COLORS.grey}}>
                        <Text className="text-white" style={{color: COLORS.accent}}>
                            Да
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default WelcomeScreen;
