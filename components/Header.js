import React from 'react'
import { StyleSheet, View, Text, Button } from "react-native";
import Menu from './Menu'

const Header = ({ ToggleMenu }) => {

    return (
        <View style={styles.headerDark}>
            <Button title="Menu" onPress={() => ToggleMenu()} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff',
        width: '100%',
        height: 60
    },
    headerDark: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10
    }
})

export default Header
