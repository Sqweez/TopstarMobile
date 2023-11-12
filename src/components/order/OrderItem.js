import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const OrderItem = ({status = true}) => {
  return (
      <View style={styles.wrapper}>
        <View style={styles.imageWrapper}>
          <Image
              style={styles.image}
              source={require('./../home/assets/relevant_1.png')}
          />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.productText}>Табак DarkSide Клубничный</Text>
          <Text style={styles.priceText}>200 тг</Text>
          <Text style={styles.dateText}>21.09.2021</Text>
        </View>
        <View style={styles.statusWrapper}>
          <Text style={[styles.statusText, {color: status ? '#52FF63' : '#FF4242'}]}>
            { status ? 'Завершен' : 'Отменен' }
          </Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: 120,
    borderBottomWidth: 1,
    borderBottomColor: '#3B4046',
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageWrapper: {
    height: 98,
    width: 98,
  },
  image: {
    resizeMode: 'contain',
    height: 98,
    width: 98
  },
  textWrapper: {
    marginLeft: 9,
    width: 121,
  },
  productText: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Montserrat_400Regular',
    width: 121,
  },
  priceText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 3,
    fontFamily: 'Montserrat_400Regular',
  },
  dateText: {
    marginTop: 3,
    fontSize: 14,
    color: '#888A8C',
    fontFamily: 'Montserrat_400Regular',
  },
  statusWrapper: {
    flex: 1,
    height: 120,
    paddingRight: 10,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  statusText: {
    paddingTop: 10,
    fontSize: 14,
    fontFamily: 'Montserrat_700Bold'
  },
})

export default OrderItem;
