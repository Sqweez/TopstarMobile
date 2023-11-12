import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Tabs from "../components/navigation/Tabs/Tabs";

const TabLayout = ({children, color = '#000'}) => {
    return (
        <View style={{...styles.wrapper, backgroundColor: color}}>
            <ScrollView>
                { children }
                <View style={{height: 66 + 15}} />
            </ScrollView>
           {/* <Tabs />*/}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    }
})

export default TabLayout;
