import React from 'react';
import {ActivityIndicator, View, StyleSheet} from "react-native";
import COLORS from "../../styles/COLORS";

const Loader = (props) => {

    return props.active === true ? (<View style={styles.container}>
        <ActivityIndicator size='large' color={COLORS.accent}/>
    </View>) : (<></>);
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        zIndex: 10,
        opacity: 0.5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default Loader;
