import React, {useContext, useEffect, useState} from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import ProductListCard from "../components/product/ProductListCard";
import COLORS from "../styles/COLORS";
import Loader from "../components/loader/Loader";
import ProductStore from "../store/ProductStore";
import {observer} from "mobx-react-lite";
import AuthStore from "../store/AuthStore";
import { autorun } from "mobx";

const ProductListScreen = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const productContext = useContext(ProductStore);
    const authContext = useContext(AuthStore);
    const route = useRoute();
    const [categoryId, setCategoryId] = useState(route.params?.category_id);
    const [typeId, setTypeId] = useState(route.params?.type_id);
    const [search, setSearch] = useState(route.params?.search);
    const [user, setUser] = useState(authContext.user);

    useEffect(() => {
        setSearch(productContext.searchText);
        setTypeId(null);
        setCategoryId(null);
    }, [productContext.searchText]);

    useEffect(() => {
        if (categoryId) {
            (async () => {
                setLoading(true);
                await productContext.getProductsByCategory(categoryId, user.city_id);
                setProducts(productContext.products);
                setLoading(false);
            })();
        }
        if (typeId) {
            (async () => {
                setLoading(true);
                await productContext.getProductsByType(typeId, user.city_id);
                setProducts(productContext.products);
                setLoading(false);
            })();
        }

        if (search) {
            (async () => {
                setLoading(true);
                await productContext.getProductsBySearch(search, user.city_id);
                setProducts(productContext.products);
                setLoading(false);
                productContext.setSearchText('');
            })();
        }
    }, [categoryId, typeId, user, search]);

    const renderProductCards = (products) => {
        return products.map((product, key) => {
            return (
                <View style={{ width: '46%', alignItems: 'center', marginVertical: 10 }} key={key}>
                    <ProductListCard key={key} product={product}/>
                </View>
            );
        })
    }

    const loadMore = () => {
       /* setLoading(true);
        setProducts(prev => [...prev, ...prev])
        setTimeout(() => {
            setLoading(false);
        }, 2000);*/
    }

    return (
        <View style={{flex: 1, backgroundColor: '#1F2125'}}>
            <Loader active={loading} />
            {
                (products.length === 0 && !loading)
                &&
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 14, fontFamily: 'Montserrat_500Medium', marginTop: 40 }}>
                    Товары не найдены!
                </Text>
            }
            <ScrollView
                style={{ paddingHorizontal: '5%'}}
                contentInset={{ bottom: 50 }}
                contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between'}}>
                { renderProductCards(products) }
                {/*<View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginHorizontal: 'auto', marginVertical: 15}}>
                    <TouchableOpacity style={styles.button} onPress={() => loadMore() }>
                        <Text style={styles.buttonText}>
                            Загрузить еще
                        </Text>
                    </TouchableOpacity>
                </View>*/}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.accent, marginTop: 10, paddingHorizontal: 10, paddingVertical: 5,
        borderRadius: 5,
    },
    buttonText: {
        fontFamily: 'Montserrat_400Regular'

    }
})

export default observer(ProductListScreen);
