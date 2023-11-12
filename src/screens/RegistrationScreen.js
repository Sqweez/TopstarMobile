import React, {useContext, useEffect, useState} from 'react';
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
  TouchableOpacity, AsyncStorage
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import COLORS from "../styles/COLORS";
import Toast from 'react-native-root-toast';
import ProductStore from "../store/ProductStore";
import RNPickerSelect from 'react-native-picker-select';
import Loader from "../components/loader/Loader";
import AuthStore from "../store/AuthStore";

const {height} = Dimensions.get('window');

const RegistrationScreen = ()  => {
  const navigation = useNavigation();
  const productContent = useContext(ProductStore);
  const authContext = useContext(AuthStore);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordC, setPasswordC] = useState('');
  const [cityId, setCityId] = useState(null);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCities(productContent.cities);
  }, []);

  const handleRedirect = () => {
    navigation.navigate('Login');
  }

  const handleSubmit = async () => {

    if (password !== passwordC) {
      return showToast('Пароли не совпадают!');
    }

    if (!age) {
      return showToast('Ваш возраст менее 21 года!')
    }
    const payload = {
      name,
      phone,
      password,
      cityId
    };
    try {
      setLoading(true);
      await authContext.register(payload);
      showToast('Вы успешно зарегистрированы!');
      navigation.reset({
        routes: [
          {
            name: 'Home'
          }
        ],
        index: 0,
      })
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  const showToast = (msg) => {
    let toast = Toast.show(msg, {
      duration: Toast.durations.SHORT,
      position: Toast.positions.CENTER,
    });
  }

  const [age, setAge] = useState(false);

  return (
      <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'height' : 'padding'}
          style={{flex: 1}}
      >
        <Loader active={loading} />
        {!loading && <ScrollView keyboardShouldPersistTaps="handled" containerStyle={styles.container}>
          <View style={styles.logoWrapper}>
            <Image
                style={styles.logo}
                source={require('./../../assets/tooman_logo.png')}
            />
          </View>
          <View style={styles.formWrapper}>
            <TextInput
                placeholder="ФИО"
                placeholderTextColor='#67707A'
                style={styles.input}
                clearButtonMode="always"
                onChangeText={val => setName(val)}
            />
            <TextInput
                placeholder="Номер телефона"
                placeholderTextColor='#67707A'
                style={styles.input}
                clearButtonMode="always"
                keyboardType='numeric'
                onChangeText={val => setPhone(val)}
            />
            <TextInput
                placeholder="Пароль"
                placeholderTextColor='#67707A'
                style={styles.input}
                clearButtonMode="always"
                secureTextEntry={true}
                onChangeText={val => setPassword(val)}
            />
            <TextInput
                placeholder="Повторите пароль"
                placeholderTextColor='#67707A'
                style={styles.input}
                clearButtonMode="always"
                secureTextEntry={true}
                onChangeText={val => setPasswordC(val)}
            />
            <View style={{flex: 1, ...styles.input}}>
              <RNPickerSelect
                  useNativeAndroidPickerStyle={false}
                  placeholder={{ label: "Выберите город", value: null }}
                  style={customPickerStyles}
                  onValueChange={(value) => setCityId(value)}
                  items={[...cities.map((city) => ({label: city.name, value: city.id}))]}
              />
            </View>
            <View style={styles.checkboxWrapper}>
              <TouchableOpacity style={styles.checkbox} onPress={() => setAge(prev => !prev)}>
                {age && <Feather name="check" size={20} color={COLORS.accent} />}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setAge(prevAge => !prevAge)
              }}>
                <Text style={styles.checkboxLabel}>
                  Мне больше 21 года
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>
                Регистрация
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRedirect}>
              <Text style={{color: COLORS.accent, fontFamily: 'Montserrat_400Regular'}}>
                Я уже зарегистрирован
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>}
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  logoWrapper: {
    flex: 241,
    height: 45,
    marginTop: height * 0.1,
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
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
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#000',
    zIndex: 1,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center'
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

const customPickerStyles = StyleSheet.create({
  chevron: {
    color: 'white'
  },
  inputIOS: {
    fontSize: 12,
    color: 'white',
    paddingRight: 30, // to ensure the text is never behind the icon
    fontFamily: 'Montserrat_300Light',
  },
  inputAndroid: {
    fontSize: 12,
    color: 'white',
    paddingRight: 30, // to ensure the text is never behind the icon
    fontFamily: 'Montserrat_300Light',
  },
});

export default RegistrationScreen;
