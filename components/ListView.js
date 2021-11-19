import React from 'react'
import { SafeAreaView, StyleSheet, ImageBackground, FlatList, View } from "react-native";

import ListItem from './ListItem'
import ListFooter from './ListFooter'
import ListPopUp from './ListPopUp'

const ListView = () => {

    const [listItems, setListItems] = React.useState([
        { id: 1, text: "go", status: false },
        { id: 2, text: "react", status: false },
        { id: 3, text: "js", status: false },
        { id: 4, text: "c++", status: false },
        { id: 5, text: "c#", status: false },
        { id: 6, text: "php", status: false },
        { id: 7, text: "vue.js", status: false },
        { id: 8, text: "angular", status: false },
        { id: 9, text: "laravel", status: false },
        { id: 10, text: "java", status: false },
    ])

    const [isPopUp, setIsPopUp] = React.useState(false)

    let popup;

    const SetStatus = (id) => {
        setListItems((updateList) => {
            return updateList.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        status: !item.status
                    }
                }
                return item;
            })
        })
    }

    const IsPopUp = (bool) => {
        setIsPopUp(bool);
    }

    if (isPopUp) popup = <ListPopUp items={listItems} IsPopUp={IsPopUp}/>
    else popup = <View></View>

    return (
        <SafeAreaView style={styles.body}>
            <ImageBackground
                source={require('../assets/nature.jpg')}
                style={styles.bacground}
                blurRadius={5}
            >
                <View style={{marginBottom: 50}}></View>
                {popup}
                <FlatList
                    data={listItems}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <ListItem
                            SetStatus={SetStatus}
                            item={item} />
                    )}
                />
                <View style={{ marginBottom: 'auto' }}></View>
                <ListFooter IsPopUp={IsPopUp} items={listItems} />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bacground: {
        flex: 1,
        display: 'flex'
    },
    body: {
        flex: 1,
        width: '100%',
    }
})

export default ListView

