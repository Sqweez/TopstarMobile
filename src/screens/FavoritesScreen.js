import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TabLayout from "../layouts/TabLayout";
import FavoriteItem from "../components/favorites/FavoriteItem";
import COLORS from "../styles/COLORS";

const FavoritesScreen = () => {
    return (
        <TabLayout color={COLORS.primary}>
          <FavoriteItem />
          <FavoriteItem />
          <FavoriteItem />
          <FavoriteItem />
          <FavoriteItem />
        </TabLayout>
    );
}

const styles = StyleSheet.create({

})

export default FavoritesScreen;
