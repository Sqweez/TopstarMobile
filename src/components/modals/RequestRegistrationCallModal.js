import React, {useContext, useState} from "react";
import {
    Text,
    View,
    StatusBar,
    SafeAreaView,
    Platform,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import COLORS from "../../styles/COLORS";
import MaskInput from 'react-native-mask-input';
import {observer} from 'mobx-react-lite';
import AuthStore from '../../store/AuthStore';
import useLoader from '../../hooks/useLoader';
import CONSTS from '../../common/constants/CONSTS';
import {__hardcoded} from "../../helpers/functions";
import Notification from "../../libs/Notification";
const RequestCallModal = () => {

    const navigator = useNavigation();
    const authContext = useContext(AuthStore);
    const loader = useLoader();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleClose = async () => {
        navigator.goBack();
    }

    const handleSubmit = async () => {
        loader.enable();
        await authContext.requestRegistration({
            name,
            phone,
            request_type_id: __hardcoded(1),
            description: 'Запрос на регистрацию от нового клиента'
        });
        loader.disable();
    }

    const handleLater = async () => {
        //await navigator.goBack();
        await authContext.requestRegistration(null);
    }

    return (
        <SafeAreaView style={{
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
        }}>
            <View style={styles.wrapper}>
                <Text style={styles.heading}>
                    Закажите обратный звонок от нашего клуба
                </Text>
            </View>
            <View style={styles.formWrapper} className="flex flex-col justify-center items-center w-full px-8 mt-4">
                <View className='w-full flex flex-col'>
                    <Text className='text-white mb-2 ml-2 text-xs' style={{fontFamily: 'Montserrat_400Regular'}}>
                        Имя
                    </Text>
                    <View className='w-full py-2 px-4 rounded-2xl mb-4' style={{backgroundColor: '#1C1C1C'}}>
                        <TextInput
                            onChangeText={e => setName(e)}
                            className='text-white'
                            placeholder="Введите ваше имя"
                            placeholderTextColor='#67707A'
                            style={styles.input}
                            clearButtonMode="always"
                        />
                    </View>
                </View>
                <View className='w-full flex flex-col'>
                    <Text className='text-white mb-2 ml-2 text-xs' style={{fontFamily: 'Montserrat_400Regular'}}>
                        Телефон
                    </Text>
                    <View className='w-full py-2 px-4 rounded-2xl mb-4' style={{backgroundColor: '#1C1C1C'}}>
                        <MaskInput
                            onChangeText={(formatted, extracted) => {
                                setPhone(extracted)
                            }}
                            value={phone}
                            mask={CONSTS.PHONE_MASK}
                            className='text-white'
                            placeholder="Введите ваш номер телефона"
                            placeholderTextColor='#67707A'
                            style={styles.input}
                            clearButtonMode="always"
                            keyboardType='phone-pad'/>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSubmit} className='w-full'>
                    <Text style={styles.buttonText}>
                        Отправить
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLater} className='mt-0'>
                    <Text style={{color: COLORS.accent, fontFamily: 'Montserrat_400Regular'}}>
                        Напомнить позже
                    </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
                <AntDesign name="close" size={24} color={COLORS.accent}/>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 80,
        position: 'relative'
    },
    heading: {
        color: COLORS.accent,
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Montserrat_700Bold',
    },
    formWrapper: {
        //marginTop: 74,
        /* marginTop: 74,
         flex: 1,
         alignItems: 'center'*/
    },
    formContainer: {
        width: 208,
        height: 34,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    codeInput: {
        height: 34,
        backgroundColor: '#141517',
        width: 28,
    },
    hint: {
        width: 225,
        color: '#FFFFFF',
        fontSize: 12,
        fontFamily: 'Montserrat_300Light',
        textAlign: 'center',
        marginTop: 40,
    },
    button: {
        //marginTop: 20,
        //width: 250,
        height: 46,
        backgroundColor: COLORS.accent,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        textTransform: 'uppercase',
        fontFamily: 'Montserrat_700Bold',
        color: '#292D32',
        fontSize: 12,
    },
    closeButton: {
        position: 'absolute',
        top: StatusBar.currentHeight + 30,
        right: 20,
    }
})

export default observer(RequestCallModal);
