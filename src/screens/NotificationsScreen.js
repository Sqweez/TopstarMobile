import React from 'react';
import { StyleSheet, ScrollView, View} from "react-native";
import MainLayout from "../layouts/MainLayout";
import NotificationItem from "../components/notification/NotificationItem";

const NotificationsScreen = (props) => {
    return (
        <MainLayout>
            <ScrollView containerStyle={styles.wrapper}>
                <NotificationItem text='Вчера пришел вкусный табак' date='21.09.21'/>
            </ScrollView>
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#67707A',
    }
});


export default NotificationsScreen;
