import React, {useContext, useEffect} from 'react';
import HomeCarousel from "../components/home/HomeCarousel";
import HomeRelevantCarousel from "../components/home/HomeRelevantCarousel";
import HomeCategoryCarousel from "../components/home/HomeCategoryCarousel";
import TabLayout from "../layouts/TabLayout";
import {observer} from 'mobx-react-lite';
import HomeStore from "../store/HomeStore";
import {useNavigation} from "@react-navigation/native";
import { View, Text, Image, Animated} from 'react-native';
import COLORS from '../styles/COLORS';

const HomeScreen = (props) => {
    const navigator = useNavigation();
    const homeState = useContext(HomeStore);
    return (
        <TabLayout>
            <HomeCarousel items={homeState.homeStocks}/>
            <View className={'py-4 px-4'}>
                <Text className={'text-sm uppercase'} style={{fontFamily: 'Montserrat_400Regular', color: COLORS.accent}}>
                    Наши клубы:
                </Text>
                <View className={'py-4 gap-y-4'}>
                    <View className={'flex flex-row p-4 rounded-xl gap-x-4 items-center'} style={{backgroundColor: '#1C1C1C'}}>
                        <View>
                            <Animated.Image
                                source={require('../../assets/images/clubs/1.png')}
                                style={{width: 87, height: 87}}
                                resizeMode={'cover'}
                            />
                        </View>
                        <View>
                            <Text
                                className={'text-white text-base'}
                                style={{fontFamily: 'Montserrat_400Regular'}}
                            >
                                Top Star
                            </Text>
                            <Text
                                className={'text-base'}
                                style={{fontFamily: 'Montserrat_400Regular', color: COLORS.women_color}}
                            >
                                Женская студия
                            </Text>
                            <Text
                                className={'text-white text-base'}
                                style={{fontFamily: 'Montserrat_400Regular'}}
                            >
                                Людей в клубе: 78
                            </Text>
                        </View>
                    </View>
                    <View className={'flex flex-row p-4 rounded-xl gap-x-4 items-center'} style={{backgroundColor: '#1C1C1C'}}>
                        <View>
                            <Animated.Image
                                source={require('../../assets/images/clubs/2.png')}
                                style={{width: 87, height: 87}}
                                resizeMode={'cover'}
                            />
                        </View>
                        <View>
                            <Text
                                className={'text-white text-base'}
                                style={{fontFamily: 'Montserrat_400Regular'}}
                            >
                                Top Star
                            </Text>
                            <Text
                                className={'text-base'}
                                style={{fontFamily: 'Montserrat_400Regular', color: COLORS.atrium_color}}
                            >
                                ATRIUM
                            </Text>
                            <Text
                                className={'text-white text-base'}
                                style={{fontFamily: 'Montserrat_400Regular'}}
                            >
                                Людей в клубе: 78
                            </Text>
                        </View>
                    </View>
                    <View className={'flex flex-row p-4 rounded-xl gap-x-4 items-center'} style={{backgroundColor: '#1C1C1C'}}>
                        <View>
                            <Animated.Image
                                source={require('../../assets/images/clubs/3.png')}
                                style={{width: 87, height: 87}}
                                resizeMode={'cover'}
                            />
                        </View>
                        <View>
                            <Text
                                className={'text-white text-base'}
                                style={{fontFamily: 'Montserrat_400Regular'}}
                            >
                                Top Star
                            </Text>
                            <Text
                                className={'text-base'}
                                style={{fontFamily: 'Montserrat_400Regular', color: COLORS.kids_color}}
                            >
                                KIDS ATRIUM
                            </Text>
                            <Text
                                className={'text-white text-base'}
                                style={{fontFamily: 'Montserrat_400Regular'}}
                            >
                                Людей в клубе: 78
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </TabLayout>
    );
}
export default observer(HomeScreen);
