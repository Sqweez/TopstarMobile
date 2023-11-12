import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import COLORS from "../styles/COLORS";

const MainLayout = (props) => {
    return (
        <View style={styles.wrapper}>
            <ScrollView>
                { props.children }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: COLORS.grey,
    }
})

export default MainLayout;
