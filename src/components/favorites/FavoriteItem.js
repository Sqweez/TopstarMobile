import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import COLORS from "../../styles/COLORS";

const FavoriteItem = ({status = true}) => {
  const [isFavorite, setIsFavorite] = useState(true);
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
          <View style={styles.rating}>
            <Ionicons name="star" size={8} color={COLORS.accent}/>
            <Ionicons name="star" size={8} color={COLORS.accent}/>
            <Ionicons name="star" size={8} color={COLORS.accent}/>
            <Ionicons name="star" size={8} color={COLORS.accent}/>
            <Ionicons name="star" size={8} color={COLORS.accent}/>
          </View>
          <Text style={styles.priceText}>200 тг</Text>
        </View>
        <View style={styles.statusWrapper}>
          <TouchableOpacity
              style={styles.icon}
              activeOpacity={0.8}
              onPress={() => setIsFavorite(p => !p)}>
            <MaterialIcons
                name={isFavorite ? 'favorite' : 'favorite-outline'}
                size={24}
                color={COLORS.accent} />
          </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    marginTop: 17,
    marginBottom: 10,
  },
  wrapper: {
    flex: 1,
    height: 128,
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
    paddingTop: 10,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
})

export default FavoriteItem;
