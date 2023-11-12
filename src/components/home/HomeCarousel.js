import React, {useMemo, useRef, useState} from 'react';
import {Text, View, StyleSheet, Dimensions, TouchableOpacity, Image} from 'react-native';
import COLORS from "../../styles/COLORS";
import Carousel from 'react-native-reanimated-carousel';
import Notification from '../../libs/Notification';
import Loader from '../utils/Loader';
const HomeCarousel = ({items}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const width = Dimensions.get('window').width;

    const length = useMemo(() => {
        return items.length;
    }, [items]);

    return (
        <>
            <View className='flex-1 relative mt-3'>
                <Carousel
                    loop
                    width={width}
                    height={203}
                    autoPlay={true}
                    data={items}
                    scrollAnimationDuration={800}
                    autoPlayInterval={5000}
                    enableSnap={true}
                    pagingEnabled={true}
                    onProgressChange={(_, absoluteProgress) => {
                        let roundedIndex = Math.round(absoluteProgress);
                        if (roundedIndex > length - 1) {
                            roundedIndex = 0;
                        }
                        if (roundedIndex !== currentIndex) {
                            setCurrentIndex(roundedIndex);
                        }
                    }}
                    renderItem={({index, item}) => (
                        <TouchableOpacity
                            onPress={() => {}}
                            activeOpacity={0.7}
                            className='w-full flex flex-row justify-center px-5'
                            style={{
                                height: 203,
                            }}
                        >
                            <View
                                className='h-full rounded-2xl bg-white w-full  overflow-hidden'
                            >
                                <Image
                                    className='w-full h-full'
                                    source={item.image}
                                    resizeMode='cover'
                                />
                            </View>
                        </TouchableOpacity>
                    )}
                />
                <View className='flex flex-row w-full mt-4 gap-x-1 justify-center absolute bottom-4'>
                    {new Array(length).fill(null).map((_, index) => {
                        return (
                            <View
                                style={{ width: 9, height: 9, backgroundColor: currentIndex === index ? COLORS.accent : '#000' }}
                                className={`rounded-full shadow-2xl`}
                                key={index}/>
                        );
                    })}
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        height: 155,
        backgroundColor: COLORS.primary,
        padding: 10,
        overflow: 'visible',
        paddingRight: 20,
    },
    item: {
        width: 167,
        marginHorizontal: 10
    },
    image: {
        borderRadius: 13,
        width: '100%',
        height: 104,
        backgroundColor: '#ff0',
        marginBottom: 10,
    },
    text: {
        color: '#8F9AA6',
        fontSize: 11,
        textAlign: 'center',
        fontFamily: 'Montserrat_400Regular'
    }
})

export default HomeCarousel;
