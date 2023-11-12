import React from 'react';
import {StyleSheet} from "react-native";
import MainLayout from "../layouts/MainLayout";
import OrderItem from "../components/order/OrderItem";

const OrdersScreen = (props) => {
    return (
        <MainLayout>
            <OrderItem status={true}/>
            <OrderItem status={true}/>
            <OrderItem status={false}/>
            <OrderItem status={true}/>
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#1F2125'
    }
});

export default OrdersScreen;
