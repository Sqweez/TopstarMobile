import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import COLORS from "../../styles/COLORS";
import { MaterialIcons } from '@expo/vector-icons';

const ProductCard = () => {
    const [isFavorite, setIsFavorite] = useState(false);
    const handleFavorite = async () => {
        setIsFavorite(!isFavorite);
    }
    return (
        <TouchableOpacity style={styles.wrapper} activeOpacity={0.7}>
            <TouchableOpacity
                style={styles.icon}
                activeOpacity={0.8}
                onPress={handleFavorite}>
                    <MaterialIcons
                        name={isFavorite ? 'favorite' : 'favorite-outline'}
                        size={22}
                        color="#5B636D" />
            </TouchableOpacity>
            <Image
                source={require('./../home/assets/relevant_1.png')}
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={1}>
                    Табак малиновый
                </Text>
            </View>
            <Text style={styles.price}>
                200 тг
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: 155,
        height: 194,
        backgroundColor: COLORS.primary,
        marginRight: 10,
        position: 'relative'
    },
    image: {
        width: 98,
        height: 98,
        resizeMode: 'contain',
        marginTop: 23,
        marginLeft: 28
    },
    textContainer: {
        marginTop: 7,
        marginLeft: 18,
        width: 150,
        overflow: 'hidden',
        paddingRight: 20
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
        marginLeft: 18,
        fontFamily: 'Montserrat_500Medium'
    },
    icon: {
        position: 'absolute',
        top: 15,
        right: 12,
    },
})

export default ProductCard;
