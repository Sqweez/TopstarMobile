import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import COLORS from '../../styles/COLORS';
import {Svg, Path} from 'react-native-svg';
import Animated from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

const TeamMemberCard = ({member}) => {

    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('TeamMember', member);
    }

    return (
        <TouchableOpacity
            onPress={handlePress}
            style={{width: '44%'}}
            className='mb-6'
            underlayColor={COLORS.accent}
        >
            <View
                style={{...styles.imageContainer, borderRadius: 200 / 2}}
                className='overflow-hidden relative'
            >
                <Svg
                    width="73" height="73" viewBox="0 0 73 73" fill="none"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 1,
                    }}
                >
                    <Path
                        d="M73 2.46972C73 1.10573 71.8939 -0.00436346 70.5307 0.0417732C61.7865 0.337713 53.1597 2.2035 45.0641 5.5568C36.2073 9.22539 28.1599 14.6025 21.3812 21.3812C14.6025 28.1599 9.22538 36.2073 5.55679 45.0641C2.2035 53.1597 0.337712 61.7865 0.0417729 70.5307C-0.0043636 71.8939 1.10573 73 2.46972 73C3.83371 73 4.93476 71.8939 4.98424 70.5308C5.27812 62.4355 7.01518 54.4506 10.1202 46.9544C13.5406 38.6969 18.5539 31.1939 24.8739 24.8739C31.1939 18.5539 38.6969 13.5406 46.9543 10.1202C54.4506 7.01519 62.4354 5.27812 70.5308 4.98424C71.8939 4.93476 73 3.83371 73 2.46972Z"
                        fill="#BAD621"/>
                </Svg>
                <Svg
                    width="73"
                    height="73"
                    viewBox="0 0 73 73"
                    fill="none"
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        zIndex: 1,
                    }}
                >
                    <Path
                        d="M0 70.5303C0 71.8943 1.10609 73.0044 2.4693 72.9582C11.2135 72.6623 19.8403 70.7965 27.9359 67.4432C36.7927 63.7746 44.8401 58.3975 51.6188 51.6188C58.3975 44.8401 63.7746 36.7927 67.4432 27.9359C70.7965 19.8403 72.6623 11.2135 72.9582 2.4693C73.0044 1.10609 71.8943 -7.62939e-06 70.5303 -7.62939e-06C69.1663 -7.62939e-06 68.0652 1.1061 68.0158 2.46919C67.7219 10.5645 65.9848 18.5494 62.8798 26.0456C59.4594 34.3031 54.4461 41.8061 48.1261 48.1261C41.8061 54.4461 34.3031 59.4594 26.0456 62.8798C18.5494 65.9848 10.5646 67.7219 2.4692 68.0158C1.10611 68.0652 0 69.1663 0 70.5303Z"
                        fill="#BAD621"/>
                </Svg>
                <Animated.Image
                    source={member.image}
                    resizeMode='cover'
                />
            </View>
            <Text
                className='text-center mt-4 text-white text-base'
                style={{fontFamily: 'Montserrat_500Medium'}}>
                {member.name}
            </Text>
            <Text
                className='text-center text-white text-base'
                style={{fontFamily: 'Montserrat_500Medium', color: COLORS.accent}}>
                {member.position}
            </Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        aspectRatio: 1,
        borderWidth: 4,
        //borderColor: COLORS.accent,
    },
});


export default TeamMemberCard;
