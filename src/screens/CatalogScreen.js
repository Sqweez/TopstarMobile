import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import TabLayout from "../layouts/TabLayout";
import {MaterialIcons} from '@expo/vector-icons';
import COLORS from "../styles/COLORS";
import CatalogItem from "../components/catalog/CatalogItem";

const CatalogScreen = (props) => {
    return (
        <TabLayout>
            <CatalogItem title="Табаки" image={true}/>
            <CatalogItem title="Кальяны" image={true}/>
        </TabLayout>
    );
}

const styles = StyleSheet.create({})

export default CatalogScreen;
