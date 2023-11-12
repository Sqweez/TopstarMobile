import React, {useState, useMemo} from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import COLORS from "../../styles/COLORS";
import { useNavigation, useRoute } from '@react-navigation/native';

const HomeCategoryCarousel = ({title, items, id}) => {
    const navigator = useNavigation();
    const [defaultImage] = useState()

    const handleButtonPress = () => {
        navigator.navigate({
            name: 'ProductList',
            params: {
                type_id: id,
                back: 'Home'
            }
        })
    }

    const getSource = image => {
        return image ? {uri: image} : require('./../../../assets/images/product/category_default.png');
    }

    const renderSlides = useMemo(() => {
        if (items.length) {
            const columnsLength = Math.ceil(items.length / 2);
            const array = new Array(columnsLength).fill({});
            const _slides = [...items];
            return array.map((_, idx) => {
                return (
                    <View
                        style={{...styles.carouselContainer, paddingLeft: idx === 0 ? 20 : 0}}
                        key={`slide-container-category-${idx}`}>
                            {
                                _slides.splice(0, 2).map((item, index) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => {
                                                navigator.navigate({
                                                    name: 'Category',
                                                    params: {
                                                        back: 'Home',
                                                        id: item.id
                                                    }
                                                })
                                            }}
                                            key={`${item.name}-${index}`}
                                            style={{...styles.carouselItem, marginBottom: index === 0 ? 30 : 0}}>
                                            <View style={styles.imageContainer}>
                                                <Image
                                                    source={getSource(item.image)}
                                                    style={styles.carouselImage}/>
                                            </View>
                                            <Text style={styles.carouselText} numberOfLines={2}>{item.name}</Text>
                                        </TouchableOpacity>
                                    );
                                })
                            }
                    </View>
                );
            });
        } else {
            return <></>;
        }

    }, [items, navigator]);

    return (
        <View style={styles.wrapper}>
            <Text style={styles.heading}>{title}</Text>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                styles={styles.carousel}
            >
                {renderSlides}
            </ScrollView>
            <TouchableOpacity style={styles.button} onPress={() => handleButtonPress()}>
                <Text style={styles.buttonText}>Все предложения</Text>
                <MaterialIcons
                    style={styles.buttonIcon}
                    name="keyboard-arrow-right"
                    size={26}
                    color={COLORS.accent}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: COLORS.primary,
        marginTop: 8,
        paddingVertical: 18,
        //paddingHorizontal: 20,
        height: 318
    },
    carousel: {
        height: 200,
        paddingLeft: 20,
    },
    carouselContainer: {
        marginRight: 15,
        marginTop: 12,
    },
    carouselItem: {
        width: 100,
        height: 87,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageContainer: {
        width: 100,
        height: 65,
        borderRadius: 5,
        backgroundColor: '#131516',
        alignItems: 'center',
        justifyContent: 'center'
    },
    carouselImage: {
        flex: 1,
        resizeMode: 'contain',
        width: 60,
        height: 60,
    },
    carouselText: {
        color: '#fff',
        fontFamily: 'Montserrat_400Regular',
        fontSize: 12,
        marginTop: 5,
    },
    heading: {
        color: '#fff',
        fontFamily: 'Montserrat_700Bold',
        fontSize: 16,
        marginLeft: 20,
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    buttonText: {
        fontSize: 12,
        fontFamily: 'Montserrat_400Regular',
        color: COLORS.accent,
    },
    buttonIcon: {},
})

export default HomeCategoryCarousel;
