import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import ProductCard from "../category/ProductCard";
import TabLayout from "../../layouts/TabLayout";

const PopularProducts = ({ title }) => {
    return (
        <>
          <Text style={styles.heading}>
            { title }
          </Text>
          <ScrollView
              horizontal={true}
              style={styles.carouselWrapper}
              showsHorizontalScrollIndicator={false}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
  heading: {
    color: '#5B636D',
    fontSize: 11,
    paddingTop: 18,
    paddingLeft: 21,
    textTransform: 'uppercase',
    fontFamily: 'Montserrat_400Regular'
  },
  carouselWrapper: {
    paddingLeft: 21,
    marginTop: 34,
    fontFamily: 'Montserrat_500Medium',
  }
})

export default PopularProducts;
