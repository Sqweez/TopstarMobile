import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";
import COLORS from "../../styles/COLORS";
import {useNavigation} from "@react-navigation/native";

const CatalogItem = ({ title, id, image = false }) => {
    const catalogIcon = require('./../../../assets/images/catalog/catalog_icon.png');
    const navigation = useNavigation();


    const handlePress = () => {
        navigation.navigate({
            name: 'ProductList',
            params: {
                back: 'Home',
                category_id: id
            }
        })
    }

    return (
        <TouchableOpacity style={styles.container} onPress={() => handlePress()}>
            <View style={styles.catalogContainer}>
                {image && <Image
                    source={catalogIcon}
                    style={[styles.catalogImage]}/>
                }
                <Text style={styles.catalogTitle}>{title}</Text>
            </View>
            <MaterialIcons
                style={styles.buttonIcon}
                name="keyboard-arrow-right"
                size={26}
                color={COLORS.accent}/>
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
    catalogImage: {
        width: 37,
        height: 37,
        resizeMode: 'contain',
        marginRight: 5,
        marginTop: 4
    },
    catalogTitle: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Montserrat_400Regular'
    }
})

export default CatalogItem;
