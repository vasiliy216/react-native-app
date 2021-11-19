import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

const ListItem = ({ item, SetStatus }) => {

    let icon;

    if (item.status) icon = <Text>&#9989;</Text>
    else icon = <Text></Text>

    const Status = () => {
        SetStatus(item.id)
    }

    return (
        <TouchableOpacity style={styles.list} onPress={Status}>
            <View style={styles.text}>
                <Text style={item.status ? {color: "green"} : {color: "#000"}}>{item.id}. {item.text}</Text>
                <Text>{icon}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    list: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff',
        margin: 5,
        borderRadius: 5
    },
    text: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%'
    }
})

export default ListItem
