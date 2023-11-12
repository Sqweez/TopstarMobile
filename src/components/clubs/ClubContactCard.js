import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Svg, G, Defs, ClipPath, Path, Rect, Circle} from 'react-native-svg';
import {Ionicons} from '@expo/vector-icons';
import { Linking, TouchableOpacity} from 'react-native';

const ClubContactCard = ({ club, onLocateClub }) => {
    const geoSVG = (color) => {
        return (
            <Ionicons size={17} color={color} name={'location-sharp'}/>
        );
    }

    const instagramSVG = (color) => {
        return (
            <Svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M11.875 9.5C11.875 9.96973 11.7357 10.4289 11.4747 10.8195C11.2138 11.21 10.8428 11.5145 10.4089 11.6942C9.9749 11.874 9.49737 11.921 9.03666 11.8294C8.57596 11.7377 8.15277 11.5115 7.82062 11.1794C7.48847 10.8472 7.26227 10.424 7.17063 9.96334C7.07899 9.50263 7.12603 9.0251 7.30579 8.59113C7.48554 8.15715 7.78995 7.78623 8.18052 7.52526C8.57109 7.26429 9.03027 7.125 9.5 7.125C10.1297 7.12572 10.7333 7.37617 11.1786 7.82142C11.6238 8.26666 11.8743 8.87033 11.875 9.5ZM16.9219 6.23438V12.7656C16.9206 13.8675 16.4823 14.924 15.7032 15.7032C14.924 16.4823 13.8675 16.9206 12.7656 16.9219H6.23438C5.13245 16.9206 4.07602 16.4823 3.29684 15.7032C2.51766 14.924 2.07937 13.8675 2.07812 12.7656V6.23438C2.07937 5.13245 2.51766 4.07602 3.29684 3.29684C4.07602 2.51766 5.13245 2.07937 6.23438 2.07812H12.7656C13.8675 2.07937 14.924 2.51766 15.7032 3.29684C16.4823 4.07602 16.9206 5.13245 16.9219 6.23438ZM13.0625 9.5C13.0625 8.7954 12.8536 8.10663 12.4621 7.52078C12.0707 6.93493 11.5143 6.47832 10.8633 6.20868C10.2123 5.93904 9.49605 5.86849 8.80499 6.00595C8.11393 6.14341 7.47916 6.48271 6.98093 6.98093C6.48271 7.47916 6.14341 8.11393 6.00595 8.80499C5.86849 9.49605 5.93904 10.2123 6.20868 10.8633C6.47832 11.5143 6.93493 12.0707 7.52078 12.4621C8.10663 12.8536 8.7954 13.0625 9.5 13.0625C10.4445 13.0614 11.35 12.6858 12.0179 12.0179C12.6858 11.35 13.0614 10.4445 13.0625 9.5ZM14.25 5.64062C14.25 5.46448 14.1978 5.29228 14.0999 5.14582C14.002 4.99936 13.8629 4.8852 13.7002 4.81779C13.5375 4.75039 13.3584 4.73275 13.1856 4.76711C13.0129 4.80148 12.8542 4.8863 12.7296 5.01086C12.6051 5.13541 12.5202 5.29411 12.4859 5.46687C12.4515 5.63964 12.4691 5.81871 12.5365 5.98145C12.604 6.14419 12.7181 6.28329 12.8646 6.38115C13.011 6.47902 13.1832 6.53125 13.3594 6.53125C13.5956 6.53125 13.8221 6.43742 13.9891 6.27039C14.1562 6.10337 14.25 5.87683 14.25 5.64062Z" fill={color}/>
            </Svg>
        );
    }

    const phoneSVG = (color) => {
        return (
            <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M13.0133 9.79319L16 12.2701C15.3561 14.279 14.3683 15.1671 12.3268 16C7.55356 14.0726 1.97345 8.60296 0 3.67534C0.841279 1.59095 1.69901 0.628008 3.72705 0L6.19929 2.9793L5.45149 5.56161C5.56067 6.37503 5.8037 7.05687 6.19181 7.60413C6.37203 7.87552 6.86035 8.40858 7.64779 9.19583C8.52945 10.078 9.33109 10.5229 10.0452 10.5251C10.3653 10.5348 11.3532 10.2896 13.0133 9.79319Z" fill={color}/>
            </Svg>
        );
    }

    const handlePressInstagram = (club) => {
        Linking.openURL(`instagram://user?username=${club.instagram}`)
            .catch(() => {
                Linking.openURL(`https://www.instagram.com/${club.instagram}`);
            })
    }

    const navigateSvg = (color) => {
        return (
            <Svg width="26" height="26" viewBox="0 0 26 26" fill={color} xmlns="http://www.w3.org/2000/svg">
                <Circle cx="13" cy="13" r="7" fill={color}/>
                <Path d="M26 14C26 15.5759 25.6896 17.1363 25.0866 18.5922C24.4835 20.0481 23.5996 21.371 22.4853 22.4853C21.371 23.5996 20.0481 24.4835 18.5922 25.0866C17.1363 25.6896 15.5759 26 14 26L14 24.0081C15.3143 24.0081 16.6157 23.7492 17.8299 23.2462C19.0441 22.7433 20.1474 22.0061 21.0768 21.0768C22.0061 20.1474 22.7433 19.0441 23.2462 17.8299C23.7492 16.6157 24.0081 15.3143 24.0081 14H26Z" fill={color}/>
                <Path d="M0 14C0 15.5759 0.310389 17.1363 0.913446 18.5922C1.5165 20.0481 2.40042 21.371 3.51472 22.4853C4.62902 23.5996 5.95189 24.4835 7.4078 25.0866C8.86371 25.6896 10.4241 26 12 26L12 24.0081C10.6857 24.0081 9.38432 23.7492 8.17008 23.2462C6.95585 22.7433 5.85257 22.0061 4.92324 21.0768C3.99391 20.1474 3.25672 19.0441 2.75377 17.8299C2.25081 16.6157 1.99195 15.3143 1.99195 14H0Z" fill={color}/>
                <Path d="M0 12C0 10.4241 0.310389 8.86371 0.913446 7.4078C1.5165 5.95189 2.40042 4.62902 3.51472 3.51472C4.62902 2.40042 5.95189 1.5165 7.4078 0.913445C8.86371 0.310389 10.4241 0 12 0L12 1.99195C10.6857 1.99195 9.38432 2.25081 8.17008 2.75377C6.95585 3.25672 5.85257 3.99391 4.92324 4.92324C3.99391 5.85257 3.25672 6.95585 2.75377 8.17008C2.25081 9.38432 1.99195 10.6857 1.99195 12H0Z" fill={color}/>
                <Path d="M26 12C26 10.4241 25.6896 8.86371 25.0866 7.4078C24.4835 5.95189 23.5996 4.62902 22.4853 3.51472C21.371 2.40042 20.0481 1.5165 18.5922 0.913445C17.1363 0.310389 15.5759 0 14 0L14 1.99195C15.3143 1.99195 16.6157 2.25081 17.8299 2.75377C19.0441 3.25672 20.1474 3.99391 21.0768 4.92324C22.0061 5.85257 22.7433 6.95585 23.2462 8.17008C23.7492 9.38432 24.0081 10.6857 24.0081 12H26Z" fill={color}/>
            </Svg>

        );
    }

    return (
        <View className={'bg-black py-3 px-4 mb-4'} style={{ borderLeftWidth: 4, borderLeftColor: club.accentColor }}>
            <Text className='text-base' style={{ color: club.accentColor, fontFamily: 'Montserrat_400Regular' }}>
                { club.name }
            </Text>
            <View className={'flex flex-row mt-4 justify-between items-start'}>
                <View className={'flex flex-col gap-y-2'}>
                    <View className={'flex flex-row gap-x-2 items-center'}>
                        { geoSVG(club.accentColor) }
                        <Text className={'text-white'} style={{ fontFamily: 'Montserrat_400Regular' }}>
                            { club.address }
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => handlePressInstagram(club)} className={'flex flex-row gap-x-2 items-center'}>
                        { instagramSVG(club.accentColor) }
                        <Text className={'text-white'} style={{ fontFamily: 'Montserrat_400Regular' }}>
                            { club.instagram }
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={async () => {
                        await Linking.openURL(`tel:${club.phone}`)
                    }} className={'flex flex-row gap-x-2 items-center'}>
                        { phoneSVG(club.accentColor) }
                        <Text className={'text-white'} style={{ fontFamily: 'Montserrat_400Regular' }}>
                            { club.phone }
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.navigationButton}
                    onPress={onLocateClub}
                >
                    { navigateSvg(club.accentColor) }
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    navigationButton: {
        width: 52, height: 52, backgroundColor: '#262626', borderRadius: 14, alignItems: 'center', justifyContent: 'center'
    }
})

export default ClubContactCard;
