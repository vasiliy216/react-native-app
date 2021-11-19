import React from 'react'
import { StyleSheet, View, Text, Button } from "react-native";

const ListFooter = ({ IsPopUp, items }) => {

    return (
        <View style={styles.footer}>
            <Button title="show checked items" onPress={() => IsPopUp(true)} />
            <Text> Count of goods = <Text style={{fontSize: 18}}>{ items.filter(item => item.status === true).length }</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff',
    },
    text: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%'
    }
})

export default ListFooter
