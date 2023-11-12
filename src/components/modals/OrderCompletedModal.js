import React  from 'react';
import { Text, View, StyleSheet, Modal, Dimensions } from 'react-native';
import COLORS from "../../styles/COLORS";
import { FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const OrderCompletedModal = ({visible = false}) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}>
          <View style={styles.wrapper}>
            <View style={styles.modalWrapper}>
              <FontAwesome name="check-circle" size={140} color={COLORS.accent} style={{marginTop: 30}} />
              <Text style={styles.heading}>
                Спасибо!
              </Text>
              <Text style={[styles.text, {marginTop: 40}]}>
                Ваш заказ успешно оформлен.
              </Text>
              <Text style={[styles.text]}>
                Мы свяжемся с вами в ближайшее время.
              </Text>
            </View>
          </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 600,
    flex: 1,
    backgroundColor: '#131516',
  },
  modalWrapper: {
    width: width * 0.829,
    height: width * 0.9093,
    backgroundColor: COLORS.primary,
    marginLeft: width * (1 - 0.829) / 2,
    marginTop: height * 0.1182,
    borderRadius: 22,
    alignItems: 'center'
  },
  heading: {
    fontSize: 48,
    color: COLORS.accent,
    fontFamily: 'Montserrat_700Bold'
  },
  text: {
    fontFamily: 'Montserrat_300Light',
    color: '#fff',
    fontSize: 12
  },
})

export default OrderCompletedModal;
