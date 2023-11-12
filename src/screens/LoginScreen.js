import React, {createContext, useContext, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  TextInput,
  Dimensions,
  TouchableOpacity, CheckBox
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import COLORS from "../styles/COLORS";
import MaskInput from 'react-native-mask-input';
import AuthStore from '../store/AuthStore';
import CONSTS from '../common/constants/CONSTS';
import useLoader from "../hooks/useLoader";

const {height} = Dimensions.get('window');

const LoginScreen = ()  => {
  const navigation = useNavigation();
  const authContext = useContext(AuthStore);

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const loader = useLoader();

  const handleRedirect = () => {
    navigation.navigate('RequestRegistrationCallModal');
  }

  const handleSubmit = async () => {
    loader.enable();
    try {
      await authContext.login({
        phone,
        password
      });
    } catch (e) {
      console.log(e);
    } finally {
      loader.disable();
    }
    //navigation.navigate('Code');
  }

  return (
      <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'height' : 'padding'}
          style={{flex: 1}}
      >
        <ScrollView keyboardShouldPersistTaps="handled" containerStyle={styles.container}>
          <View style={styles.logoWrapper}>
            <Image
                style={styles.logo}
                source={require('./../../assets/images/login_icon.png')}
            />
          </View>
          <Text style={styles.heading}>Авторизация</Text>
          <View style={styles.formWrapper}>
            <MaskInput
                placeholder="Номер телефона"
                placeholderTextColor='#67707A'
                style={styles.input}
                clearButtonMode="always"
                keyboardType='phone-pad'
                onChangeText={(formatted, extracted) => {
                  setPhone(extracted)
                }}
                value={phone}
                mask={CONSTS.PHONE_MASK}
            />
            <TextInput
                placeholder="Пароль"
                placeholderTextColor='#67707A'
                style={styles.input}
                clearButtonMode="always"
                secureTextEntry={true}
                onChangeText={(text) => {
                  setPassword(text)
                }}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>
                Войти
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRedirect} style={{marginBottom: 20,}}>
              <Text style={{color: COLORS.accent, fontFamily: 'Montserrat_400Regular'}}>
                Я не зарегистрирован
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    //paddingBottom: 20,
  },
  logoWrapper: {
    flex: 1,
    height: 122,
    marginTop: height * 0.1,
    alignItems: 'center'
  },
  logo: {
    width: 122,
    height: '100%',
    resizeMode: 'contain'
  },
  heading: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    textAlign: 'center',
    color: COLORS.accent,
    textTransform: 'uppercase',
    marginTop: height * 0.05
  },
  formWrapper: {
    marginTop: height * 0.1,
    flex: 1,
    alignItems: 'center'
  },
  input: {
    width: 247,
    color: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 19,
    backgroundColor: '#141517',
    borderRadius: 7,
    fontSize: 12,
    fontFamily: 'Montserrat_300Light',
    marginBottom: 15,
  },
  checkboxWrapper: {
    width: 160,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -10
  },
  checkbox: {
    color: COLORS.accent
  },
  checkboxLabel: {
    color: COLORS.accent,
    fontSize: 12,
    fontFamily: 'Montserrat_300Light'
  },
  button: {
    marginTop: 13,
    width: 250,
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
  }
})

export default LoginScreen;
