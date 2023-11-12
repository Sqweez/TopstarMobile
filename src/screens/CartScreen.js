import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import FixedBlockButton from "../components/buttons/FixedBlockButton";
import CartItem from "../components/cart/CartItem";
import { useNavigation } from '@react-navigation/native';
const CartScreen = () => {

  const navigator = useNavigation();

  return (
      <View style={{flex: 1, backgroundColor: '#1F2125'}}>
        <ScrollView>
          <CartItem />
          <CartItem />
          <CartItem />
          <View style={{flex: 1, height: 86}} />
        </ScrollView>
        <FixedBlockButton text='Продолжить' onPress={() => navigator.navigate('Payment')} />
      </View>
  );
}

const styles = StyleSheet.create({})

export default CartScreen;
