import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import MainLayout from "../layouts/MainLayout";
import ProductCarousel from "../components/product/ProductCarousel";
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import COLORS from "../styles/COLORS";
import { useNavigation } from '@react-navigation/native';
import PopularProducts from "../components/carousel/PopularProducts";
import FixedBlockButton from "../components/buttons/FixedBlockButton";
const ProductScreen = () => {
  const navigator = useNavigation();
  const [isFavorite, setFavorite] = useState(false);

  const toggleFavorite = async () => {
    setFavorite(prev => !prev);
  }

  const toOtherProducts = () => {
    navigator.navigate('Category')
  }

  const onPurchase = () => {
    navigator.navigate('Cart');
  }

  return (
      <View style={{flex: 1}}>
        <ScrollView>
          <ProductCarousel/>
          <View style={styles.topWrapper}>
            <View style={styles.leftWrapper}>
              <Text style={styles.productName}>
                Табак DARKSIDE клубничный
              </Text>
              <View style={styles.ratingWrapper}>
                <View style={styles.rating}>
                  <Ionicons name="star" size={12} color={COLORS.accent}/>
                  <Ionicons name="star" size={12} color={COLORS.accent}/>
                  <Ionicons name="star" size={12} color={COLORS.accent}/>
                  <Ionicons name="star" size={12} color={COLORS.accent}/>
                  <Ionicons name="star" size={12} color={COLORS.accent}/>
                </View>
                <Text style={styles.ratingText}>(120 отзывов)</Text>
              </View>
            </View>
            <View style={styles.rightWrapper}>
              <TouchableOpacity onPress={toggleFavorite} style={styles.likeButton}>
                <Ionicons
                    name={!isFavorite ? 'heart-outline' : 'heart'}
                    size={21}
                    color={COLORS.accent}/>
              </TouchableOpacity>
              <Text style={styles.articulText}>
                Код товара: 01231231
              </Text>
            </View>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>200 тг</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>
              Описание
            </Text>
          </View>
          <View style={styles.description}>
            <Text style={styles.descriptionText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi odit quod rem, repudiandae
              temporibus vel voluptates voluptatibus? Culpa error fuga molestias necessitatibus nostrum odit perferendis
              praesentium vitae? Adipisci blanditiis deleniti fuga incidunt ipsum iusto necessitatibus nulla, perspiciatis
              placeat quam quos voluptatem. Accusamus ad distinctio fugiat libero magnam nulla sequi totam? Amet corporis
              dolore doloremque eligendi fuga, iusto magnam praesentium quod rerum sunt. A alias cum dolorem dolores
              maiores omnis perspiciatis tempora vero? Aut, beatae consectetur cum dolorum earum fuga natus nisi quo vel
              voluptas. Accusamus earum eius fugiat minima nemo pariatur perspiciatis! Ab aspernatur iure perspiciatis,
              possimus quas soluta!
            </Text>
          </View>
          <TouchableOpacity style={styles.otherProducts} onPress={toOtherProducts}>
            <Text style={styles.otherProductsText}>
              Еще товары DARKSIDE
            </Text>
            <MaterialIcons
                style={styles.buttonIcon}
                name="keyboard-arrow-right"
                size={26}
                color={'#fff'}/>
          </TouchableOpacity>
          <View style={styles.carouselWrapper}>
            <PopularProducts title='С этим товаром также покупают' />
          </View>
        </ScrollView>
        <FixedBlockButton text="Купить" onPress={onPurchase}/>
      </View>
  );
}

const styles = StyleSheet.create({
  topWrapper: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#3B4046',
    paddingBottom: 15,
  },
  leftWrapper: {
    flex: 1,
    paddingLeft: 22,
    paddingRight: 40,
  },
  productName: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Montserrat_400Regular'
  },
  ratingWrapper: {
    marginTop: 9,
    flexDirection: 'row',
    alignItems: 'center'
  },
  rating: {
    flexDirection: 'row',
    marginRight: 3,
  },
  ratingText: {
    color: '#fff',
    fontSize: 10,
    fontFamily: 'Montserrat_400Regular'
  },
  rightWrapper: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 16,
  },
  likeButton: {},
  articulText: {
    marginTop: 22,
    fontSize: 10,
    fontFamily: 'Montserrat_400Regular',
    color: '#7B8592'
  },
  priceContainer: {
    paddingVertical: 10,
    paddingHorizontal: 22,
  },
  price: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Montserrat_500Medium'
  },
  descriptionContainer: {
    backgroundColor: '#1F2125',
    paddingVertical: 16,
    paddingHorizontal: 22,
  },
  descriptionTitle: {
    color: '#66707C',
    fontSize: 12,
    fontFamily: 'Montserrat_400Regular',
    textTransform: 'uppercase'
  },
  description: {
    paddingVertical: 17,
    borderBottomWidth: 1,
    borderBottomColor: '#3B4046',
  },
  descriptionText: {
    paddingHorizontal: 22,
    fontSize: 12,
    color: '#fff',
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'justify',
  },
  otherProducts: {
    paddingVertical: 15,
    paddingHorizontal: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  otherProductsText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Montserrat_400Regular'
  },
  carouselWrapper: {
    flex: 1,
    backgroundColor: '#1F2125',
    paddingBottom: 86,
  },
})

export default ProductScreen;
