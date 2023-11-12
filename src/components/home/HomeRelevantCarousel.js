import React, {useMemo, useState} from 'react';
import {Text, View, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import COLORS from "../../styles/COLORS";
import {useNavigation} from "@react-navigation/native";

const HomeRelevantCarousel = ({items}) => {

    const navigator = useNavigation();

    const getSource = image => {
        return image ? {uri: image} : require('./../../../assets/images/product/category_default.png');
    }

    const handlePress = (id) => {
        navigator.navigate({
            name: 'Category',
            params: {
                back: 'Home',
                id
            }
        })
    }

    const renderSlides = useMemo(() => {
        if (items.length) {
            const columnsLength = Math.ceil(items.length / 2);
            const array = new Array(columnsLength).fill({});
            const _slides = [...items];
            return array.map((_, idx) => {
                return (
                    <View style={styles.container} key={`slide-container-${idx}`}>
                        {
                            _slides.splice(0, 2).map((item, index) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => handlePress(item.id)}
                                        key={`${item.name}-${index}`}
                                        style={{...styles.item, marginBottom: index === 0 ? 20 : 0}}>
                                        <View style={{flex: 1}}>
                                            <Image
                                                source={getSource(item.image)}
                                                style={styles.image}/>
                                        </View>
                                        <Text style={styles.text} numberOfLines={2}>{item.title}</Text>
                                    </TouchableOpacity>
                                );
                            })
                        }
                    </View>
                );
            });
        }
        else {
            return <></>;
        }

    }, [items]);

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={styles.wrapper}>
            {renderSlides}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        height: 255,
        width: '100%',
        backgroundColor: COLORS.primary,
        marginTop: 8,
        paddingLeft: 23,
        paddingTop: 15,
    },
    container: {
        height: 220,
        width: 80,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginRight: 40,
    },
    item: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    image: {
        width: 80,
        height: 80,
    },
    text: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 12,
        color: '#fff',
        marginTop: 5,
        textAlign: 'center'
    }
})

export default HomeRelevantCarousel;
