import React, {useContext, useMemo} from 'react';
import {observer} from 'mobx-react-lite';
import {ScrollView, View} from 'react-native';
import NewsCard from '../../components/news/NewsCard';
import {useNavigation} from '@react-navigation/native';
import ApiStore from '../../store/ApiStore';

const NewsIndexScreen = () => {

    const navigator = useNavigation();
    const apiStore = useContext(ApiStore);
    const news = useMemo(() => {
        return apiStore.news;
    }, []);

    const handlePress = (item) => {
        navigator.navigate('NewsShow', item);
    }

    const renderNewsCards = (items) => {
        return items.map((item, key) => <NewsCard item={item} key={key} onPress={() => handlePress(item)}/>)
    }

    return (
        <View style={{flex: 1}}>
            <ScrollView
                className='mt-5'
                style={{paddingHorizontal: '0%'}}
                contentInset={{bottom: 50}}
                contentContainerStyle={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20
                }}>
                {renderNewsCards([...news, ...news, ...news, ...news])}
            </ScrollView>
        </View>
    );
}

export default observer(NewsIndexScreen);
