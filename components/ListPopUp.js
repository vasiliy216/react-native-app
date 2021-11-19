import React from 'react'
import { StyleSheet, View, Text, FlatList } from "react-native";

const ListPopUp = ({ IsPopUp, items }) => {

    const [newItems, setNewItems] = React.useState(items.filter( e => e.status === true))

    const setPopUp = () => {
        IsPopUp(false);
    }

    return (
        <View style={styles.backgroud}>
            <View style={styles.popup}>
                <View style={styles.header}>
                    <Text style={{padding: 10}}>Корзина</Text>
                    <Text style={{ color: "#9e9e9e", fontWeight: 'bold', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20}} onPress={setPopUp}>X</Text>
                </View>
                <View style={{padding: 10}}>
                    <Text>В вашей корзине {items.filter(item => item.status === true).length} товара(ов)</Text>
                    <Text>
                        <FlatList
                            data={newItems}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <Text>{item.id}. {item.text}</Text>
                            )}
                        />
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    popup: {
        backgroundColor: '#fff',
        borderRadius: 5,
        position: 'absolute',
        zIndex: 100,
        top: '50%',
        left: '50%',
        width: 250,
        height: 400,
        marginLeft: -125,
        marginTop: -200
    },
    backgroud: {
        display: 'flex',
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,.4)',
        flex: 1,
        zIndex: 100,
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#000'
    }
})

export default ListPopUp
