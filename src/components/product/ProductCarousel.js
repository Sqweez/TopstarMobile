import React, {useMemo, useRef, useState} from 'react';
import { Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import COLORS from "../../styles/COLORS";

const { width } = Dimensions.get('window');

const ProductCarousel = () => {

    const [activeSlide, setActiveSlide] = useState(0);
    const isCarousel = useRef(null);

    const images = [
        require('./../../../assets/images/product/product.png'),
        require('./../../../assets/images/product/product.png'),
        require('./../../../assets/images/product/product.png'),
        require('./../../../assets/images/product/product.png'),
    ];


    const renderSlides = ({item, index}) => {
      return (
          <View style={styles.wrapper}>
            <Image
              source={item}
              style={styles.image}
            />
          </View>
      );
    }

    return (
        <View style={styles.container}>
         {/*<Carousel
             ref={isCarousel}
             onSnapToItem={(index) => setActiveSlide(index)}
             layout={'default'}
             data={images}
             sliderWidth={width}
             itemWidth={width * 0.9}
             renderItem={renderSlides}
             firstItem={0}
             useScrollView={true}
         />
          <Pagination
              dotsLength={images.length}
              activeDotIndex={activeSlide}
              carouselRef={isCarousel}
              dotStyle={{
                width: 5,
                height: 5,
                borderRadius: 5,
                backgroundColor: COLORS.accent
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={1}
              tappableDots={true}
          />*/}
        </View>
    );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: 230,
  },
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#3B4046'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
})

export default ProductCarousel;
