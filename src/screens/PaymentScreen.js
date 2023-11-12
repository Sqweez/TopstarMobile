import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import COLORS from "../styles/COLORS";
import { Ionicons } from '@expo/vector-icons';
import FixedBlockButton from "../components/buttons/FixedBlockButton";
import OrderCompletedModal from "../components/modals/OrderCompletedModal";
import { useNavigation } from '@react-navigation/native';

const PaymentScreen = () => {

  const navigator = useNavigation();
  const [paymentType, setPaymentType] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (modalVisible) {
      setTimeout(() => {
        navigator.reset({
          routes: [
            {
              name: 'Home'
            }
          ],
          index: 0,
        })
      }, 4000);
    }
  }, [modalVisible]);

  return (
      <View style={{flex: 1, backgroundColor: '#1F2125'}}>
        <OrderCompletedModal
            visible={modalVisible}
        />
        <View style={styles.wrapper}>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>
              Товары
            </Text>
            <Text style={styles.listItemText}>
              400 тг
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>
              Доставка
            </Text>
            <Text style={styles.listItemText}>
              бесплатно
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>
              Сумма покупки
            </Text>
            <Text style={styles.listItemText}>
              400 тг
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={[styles.listItemText, styles.textBold]}>
              К оплате
            </Text>
            <Text style={[styles.listItemText, styles.textBold]}>
              400 тг
            </Text>
          </View>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>
              Способы оплаты
            </Text>
          </View>
          <TouchableOpacity style={{...styles.listItem, justifyContent: 'flex-start'}} onPress={() => setPaymentType(0)}>
            <View style={[styles.checkbox, paymentType !== 0 ? styles.checkboxInactive : '']}>
              {paymentType === 0 && <Ionicons name="ios-checkmark-circle" size={20} color={COLORS.accent} />}
            </View>
            <Text style={styles.listItemText}>
              Kaspi Gold
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.listItem, justifyContent: 'flex-start'}} onPress={() => setPaymentType(1)}>
            <View style={[styles.checkbox, paymentType !== 1 ? styles.checkboxInactive : '']}>
              {paymentType === 1 && <Ionicons name="ios-checkmark-circle" size={20} color={COLORS.accent} />}
            </View>
            <Text style={styles.listItemText}>
              Наличные
            </Text>
          </TouchableOpacity>
        </View>
        <FixedBlockButton text="Оформить заказ" onPress={() => setModalVisible(true)} />
      </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 10,
    backgroundColor: COLORS.primary,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#3B4046',
    height: 59,
  },
  listItemText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Montserrat_400Regular',
    flexDirection: 'row',
    alignItems: 'center'
  },
  textBold: {
    fontFamily: 'Montserrat_600SemiBold'
  },
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
  checkboxInactive: {
    borderWidth: 1,
    borderColor: '#5B636D',
    borderRadius: 50,

  }
})

export default PaymentScreen;
