import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import COLORS from "../../styles/COLORS";

const NotificationItem = ({text, date}) => {
    return (
        <View>
            <View style={styles.wrapper}>
                <Text style={styles.text}>{text}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        height: 54,
        backgroundColor: COLORS.primary,
        borderBottomWidth: 1,
        borderBottomColor: '#3B4046',
        paddingTop: 10,
        paddingHorizontal: 11,
        paddingBottom: 10,
    },
    text: {
        color: '#fff',
        fontFamily: 'Montserrat_400Regular',
        fontSize: 14,
    },
    date: {
        color: '#A2A2A2',
        fontFamily: 'Montserrat_300Light',
        fontSize: 12,
    }
})

export default NotificationItem;
