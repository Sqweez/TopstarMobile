import React, {useContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Platform,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import COLORS from "../../styles/COLORS";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import STORAGE_KEYS from "../../common/enums/STORAGE_KEYS";
import AuthStore from "../../store/AuthStore";
const CodeScreen = () => {
  const navigator = useNavigation();
  const authContent = useContext(AuthStore);

  const handleSubmit = async () => {
    //await AsyncStorage.setItem(STORAGE_KEYS.USER_TOKEN, 'something_tokn');
    //await authContent.setUserToken('somethase');
    navigator.reset({
      routes: [
        {
          name: 'Home'
        }
      ],
      index: 0,
    })
  }

  const handleClose = () => {
    navigator.goBack();
  }

  return (
      <SafeAreaView style={{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
      }}>
        <View style={styles.wrapper}>
          <Text style={styles.heading}>
            SMS подтверждение
          </Text>
        </View>
        <View style={styles.formWrapper}>
          <View style={styles.formContainer}>
            <TextInput style={styles.codeInput} keyboardType='numeric'/>
            <TextInput style={styles.codeInput} keyboardType='numeric'/>
            <TextInput style={styles.codeInput} keyboardType='numeric'/>
            <TextInput style={styles.codeInput} keyboardType='numeric'/>
            <TextInput style={styles.codeInput} keyboardType='numeric'/>
            <TextInput style={styles.codeInput} keyboardType='numeric'/>
          </View>
          <Text style={styles.hint}>
            На ваш телефон отправлено SMS с кодом подтверждения.
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>
              Подтвердить
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <AntDesign name="close" size={24} color={COLORS.accent} />
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
    marginTop: 74,
    flex: 1,
    alignItems: 'center'
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
    marginTop: 20,
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
  },
  closeButton: {
    position: 'absolute',
    top: StatusBar.currentHeight + 30,
    right: 20,
  }
})

export default CodeScreen;
