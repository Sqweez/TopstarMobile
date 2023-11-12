import React, {useContext, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {ActivityIndicator, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import FrontendStore from '../../store/FrontendStore';
import COLORS from '../../styles/COLORS';

const Loader = () => {

    const state = useContext(FrontendStore);

    const [visible, setVisible] = useState(false);

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={state.isLoading}
        >
            <View className='flex-1 flex justify-center items-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <View className='p-8 rounded-xl shadow-2xl'>
                    <ActivityIndicator size='large' color={COLORS.accent}/>
                    <Text style={{ color: COLORS.accent, fontFamily: 'Montserrat_500Medium', fontSize: 18 }} className='mt-4'>
                        Пожалуйста, подождите...
                    </Text>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default observer(Loader);
