import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import COLORS from "../../styles/COLORS";
import { Entypo, Feather } from '@expo/vector-icons';

const CartItem = () => {
  const image = require('./../../../assets/images/product/product.png');
  const [count, setCount] = useState(2);
  const [isDeleted, setIsDeleted] = useState(false);

  const decreaseCount = () => {
    setCount(p => p > 1 ? p - 1 : p);
  }

  const increaseCount = () => {
    setCount(p => p < 10 ? p + 1 : p);
  }

  return !isDeleted ?
      <View style={styles.wrapper}>
        <View style={styles.leftWrapper}>
          <Image
              source={image}
              style={styles.image}
          />
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={[styles.button]} onPress={decreaseCount}>
              {
                count === 1
                    ? <Feather name='trash-2' size={20} color='#fff' />
                    : <Entypo name='minus' size={20} color='#fff' />
              }
            </TouchableOpacity>
            <Text style={styles.count}>
              { count }
            </Text>
            <TouchableOpacity style={[styles.button]} onPress={increaseCount}>
              <Entypo name='plus' size={20} color='#fff' />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rightWrapper}>
          <View>
            <Text style={styles.price}>
              200 тг
            </Text>
            <Text style={styles.name}>
              Табак DARKSIDE клубничный
            </Text>
          </View>
          <TouchableOpacity onPress={() => setIsDeleted(true)}>
            <Text style={styles.deleteButtonText}>Удалить</Text>
          </TouchableOpacity>
        </View>
      </View>
      : <></>
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 27,
    paddingLeft: 19,
    flex: 1,
    backgroundColor: COLORS.primary,
    borderBottomWidth: 1,
    borderBottomColor: '#3B4046',
    paddingBottom: 21,
    flexDirection: 'row'
  },
  leftWrapper: {
    marginRight: 20,
  },
  image: {
    width: 98,
    height: 98,
    resizeMode: 'cover'
  },
  buttonWrapper: {
    width: 35 * 3,
    flexDirection: 'row',
    marginTop: 17,
    alignItems: 'center'
  },
  button: {
    width: 35,
    height: 35,
    borderColor: '#5B636D',
    borderWidth: 1,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  count: {
    width: 35,
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Montserrat_400Regular'
  },
  rightWrapper: {
    justifyContent: 'space-between',
    paddingRight: 20
  },
  price: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Montserrat_700Bold'
  },
  name: {
    marginTop: 5,
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Montserrat_400Regular'
  },
  deleteButtonText: {
    fontSize: 14,
    fontFamily: 'Montserrat_400Regular',
    color: COLORS.accent,
    paddingBottom: 10
  }
})

export default CartItem;
