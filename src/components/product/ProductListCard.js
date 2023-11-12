import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import COLORS from "../../styles/COLORS";
import { MaterialIcons } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";

const ProductListCard = ({ product }) => {
    const navigator = useNavigation();
    const [isFavorite, setIsFavorite] = useState(false);
    const handleFavorite = async () => {
        setIsFavorite(!isFavorite);
    }

    const getSource = image => {
        return image ? {uri: image} : require('./../../../assets/images/product/category_default.png');
    }

    const handlePress = () => {
        navigator.navigate({
            name: 'Product',
            id: 23,
        })
    }

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity
                style={styles.icon}
                activeOpacity={0.8}
                onPress={handleFavorite}>
                <MaterialIcons
                    name={isFavorite ? 'favorite' : 'favorite-outline'}
                    size={22}
                    color={COLORS.accent} />
            </TouchableOpacity>
            <Image
                source={getSource(product.image)}
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    { product.name }
                </Text>
            </View>
            <Text style={styles.price}>
                { product.price } тг
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
                <Text style={{ fontFamily: 'Montserrat_400Regular' }}>Подробнее</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        //backgroundColor: COLORS.primary,
        marginRight: 10,
        position: 'relative',
        paddingBottom: 15,
        alignItems: 'center',
    },
    image: {
        width: 98,
        height: 98,
        resizeMode: 'contain',
        marginTop: 23,
    },
    textContainer: {
        marginTop: 7,
        width: 150,
        overflow: 'hidden',
        paddingRight: 20,
        marginRight: 'auto',
        marginLeft: 15
    },
    title: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'Montserrat_400Regular'
    },
    price: {
        color: '#fff',
        fontSize: 16,
        marginTop: 7,
        fontFamily: 'Montserrat_500Medium',
        marginRight: 'auto',
        marginLeft: 15
    },
    icon: {
        position: 'absolute',
        top: 15,
        right: 12,
    },
    button: {
        backgroundColor: COLORS.accent, marginTop: 10, paddingHorizontal: 10, paddingVertical: 5,
        marginRight: 'auto',
        marginLeft: 15,
        borderRadius: 5,
        fontFamily: 'Montserrat_400Regular'
    }
})

export default ProductListCard;
