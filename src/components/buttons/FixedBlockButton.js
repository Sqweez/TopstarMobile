import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import COLORS from "../../styles/COLORS";

const FixedBlockButton = ({text, onPress, activeOpacity = 0.9}) => {
  return (
      <TouchableOpacity style={styles.purchaseButton} activeOpacity={activeOpacity} onPress={() => onPress()}>
        <Text style={styles.purchaseButtonText}>{text}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  purchaseButton: {
    backgroundColor: COLORS.accent,
    height: 66,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center'
  },
  purchaseButtonText: {
    textAlign: 'center',
    color: '#292D32',
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold',
  },
})

export default FixedBlockButton;
