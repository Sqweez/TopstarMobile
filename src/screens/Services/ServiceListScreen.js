import React, {useEffect, useMemo, useState} from 'react'
import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import MainLayout from '../../layouts/MainLayout';
import COLORS from '../../styles/COLORS';
import { FontAwesome } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import useLoader from '../../hooks/useLoader';

const ServiceListScreen = () => {
    const [activeServiceType, setActiveServiceType] = useState(1);
    const navigator = useNavigation();

    const loader = useLoader();

    useEffect(() => {
        loader.enable();
        setTimeout(() => {
            loader.disable();
        }, 2000);
    }, []);

    const services = [
        {
            id: 1,
            name: 'Тренажер 7',
            service_type_id: 1,
        },
        {
            id: 2,
            name: 'Тренажер 3',
            service_type_id: 3,
        },
        {
            id: 3,
            name: 'Тренажер 9',
            service_type_id: 1,
        },
        {
            id: 4,
            name: 'Тренажер 2',
            service_type_id: 3,
        },
        {
            id: 5,
            name: 'Тренажер 6',
            service_type_id: 1,
        },
        {
            id: 6,
            name: 'Тренажер 10',
            service_type_id: 3,
        },
        {
            id: 7,
            name: 'Тренажер 1',
            service_type_id: 1,
        },
        {
            id: 8,
            name: 'Тренажер 8',
            service_type_id: 3,
        },
        {
            id: 9,
            name: 'Тренажер 5',
            service_type_id: 1,
        },
        {
            id: 10,
            name: 'Тренажер 4',
            service_type_id: 3,
        }
    ];



    const visibleServices = useMemo(() => {
        return services.filter(service => service.service_type_id === activeServiceType);
    }, [activeServiceType]);

    const serviceTypes = [
        {
            id: 1,
            name: 'Безлимит',
        },
        {
            id: 3,
            name: 'Программа'
        }
    ];

    const navigateTo = (item) => {
        navigator.navigate('ServiceDetails', item);
    }

    const renderServiceType = (type, index, array) => {

        let borderRadiusStyles = {};
        if (index === 0) {
            borderRadiusStyles.borderBottomLeftRadius = 6;
            borderRadiusStyles.borderTopLeftRadius = 6;
        }

        if (index === array.length - 1) {
            borderRadiusStyles.borderBottomRightRadius = 6;
            borderRadiusStyles.borderTopRightRadius = 6;
        }

        let isActive = activeServiceType === type.id;

        return (
            <TouchableOpacity
                onPress={() => setActiveServiceType(type.id)}
                className={'flex-1 py-3'}
                style={{backgroundColor: isActive ? COLORS.accent : '#000', ...borderRadiusStyles}}
            >
                <Text
                    className={'text-center text-xs uppercase'}
                    style={{fontFamily: 'Montserrat_500Medium', color: isActive ? 'black' : COLORS.accent}}
                >
                    {type.name}
                </Text>
            </TouchableOpacity>
        );
    }

    const renderServiceItem = (item) => {
        return (
            <TouchableOpacity onPress={() => navigateTo(item)} className={'flex-row py-2.5 px-4 mb-3 items-center justify-between'}>
                <Text className='text-white text-sm' style={{ fontFamily: 'Montserrat_400Regular' }}>
                    { item.name }
                </Text>
                <FontAwesome name='chevron-right' size={16} color={COLORS.accent} />
            </TouchableOpacity>
        );
    }

    return (
        <View>
            <View className={'flex flex-row overflow-hidden mt-2'}>
                {serviceTypes.map((value, index, array) => renderServiceType(value, index, array))}
            </View>
            <FlatList
                className={'mt-4'}
                data={visibleServices}
                renderItem={({item}) => renderServiceItem(item)}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

export default ServiceListScreen
