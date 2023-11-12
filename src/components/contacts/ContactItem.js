import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import COLORS from "../../styles/COLORS";

const ContactItem = () => {
  return (
      <View style={styles.itemContainer}>
        <Text style={styles.heading}>
          Адрес
        </Text>
        <Text style={styles.content}>
          Сатпаева 109/7
        </Text>
        <Text style={styles.heading}>
          Телефон
        </Text>
        <Text style={styles.content}>
          8 705 322 25 05
        </Text>
        <Text style={styles.heading}>
          Инстаграм
        </Text>
        <Text style={styles.content}>
          tooman_pvl
        </Text>
      </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'Montserrat_300Light',
    marginBottom: 3,
  },
  content: {
    fontSize: 14,
    color: COLORS.accent,
    fontFamily: 'Montserrat_500Medium',
    marginBottom: 4,
  },
  itemContainer: {
    paddingTop: 17,
    paddingBottom: 13,
    borderBottomColor: '#494E54',
    borderBottomWidth: 1,
  }
})

export default ContactItem;
