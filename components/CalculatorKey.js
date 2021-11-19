import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ImageBackground } from "react-native";

const CalculatorKey = (props) => {

    return (
        <TouchableOpacity style={props.zero ? styles.bodyZero : styles.body} onPress={() => props.inputDigit(props.children)}>
            <View style={styles.wrapper}>
                <Text style={{color : "#fff",  fontSize: 23}}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    body: {
        width: '25%',
        height: 91
    },
    bodyZero: {
        width: '50%',
        height: 91
    },
    wrapper: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
        borderColor: 'rgba(255,255,255, .06)'
    }
})

export default CalculatorKey
