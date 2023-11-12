import React, {useEffect, useState, useContext} from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import TabLayout from "../layouts/TabLayout";
import CatalogItem from "../components/catalog/CatalogItem";
import ProductCard from "../components/category/ProductCard";
import PopularProducts from "../components/carousel/PopularProducts";
import { useRoute } from '@react-navigation/native';
import { observer } from "mobx-react-lite";
import HomeStore from "../store/HomeStore";

const CategoryScreen = () => {

    const route = useRoute();
    const homeContent = useContext(HomeStore);

    const [id, setId] = useState(route.params.id);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const _categories = homeContent.categories;
        const filteredCategories = _categories.filter(c => c.type_id == id);
        setCategories(filteredCategories);
    }, [id]);

    return (
        <TabLayout>
            { categories.length > 0 && categories.map((category, idx) => {
                return <CatalogItem title={category.name} id={category.inner_id} key={idx} />
            }) }
            {
                categories.length === 0 && <Text style={{ color: 'white', textAlign: 'center', fontSize: 14, fontFamily: 'Montserrat_500Medium', marginTop: 40 }}>В данном разделе пока нет категорий</Text>
            }
            {/*<PopularProducts title='Популярные товары в этой категории' />*/}
        </TabLayout>
    );
}

const styles = StyleSheet.create({

})

export default observer(CategoryScreen);
