import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ImageBackground } from "react-native";

const CalculatorKey = (props) => {

    return (
        <TouchableOpacity style={styles.body}>
            <View style={styles.wrapper}>
                <Text style={{color : "#fff",  fontSize: 46}}>{props.value}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: 85,
        paddingRight: 28,
    },
    wrapper: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        // borderBottomWidth: 1,
        borderColor: 'rgba(255,255,255, .06)'
    }
})

export default CalculatorKey
