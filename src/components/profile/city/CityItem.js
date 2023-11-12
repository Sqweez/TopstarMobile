import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";
import COLORS from "../../../styles/COLORS";

const CityItem = ({title, onPress}) => {
  return (
      <TouchableOpacity style={styles.container} onPress={() => onPress()}>
        <View style={styles.catalogContainer}>
          <Text style={styles.catalogTitle}>{title}</Text>
        </View>
        <MaterialIcons
            style={styles.buttonIcon}
            name="keyboard-arrow-right"
            size={26}
            color={'#fff'}/>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    height: 58,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    borderTopWidth: 1,
    borderTopColor: '#5B636D',
    borderBottomWidth: 1,
    borderBottomColor: '#5B636D',
  },
  catalogContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  catalogTitle: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Montserrat_400Regular'
  }
})

export default CityItem;
