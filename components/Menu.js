import React from 'react'
import { StyleSheet, View, Text, Button, SafeAreaView } from "react-native";
import { Link } from 'react-router-native'

const Menu = ({ ToggleMenu }) => {

    return (
        <SafeAreaView style={styles.backgroud}>
            <View style={styles.menu}>
                <View style={styles.head}>
                    {/* <Text style={{padding: 10}}>Menu</Text>
                    <Text onPress={() => ToggleMenu()} style={{ color: "#9e9e9e", fontWeight: 'bold', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20}}>X</Text> */}
                </View>
                <View style={{marginBottom: 'auto'}}>
                    <Link to="/*"><Text style={styles.text}>Taxi</Text></Link>
                    <Link to="/list-view"><Text style={styles.text}>List View</Text></Link>
                    <Link to="/calculator"><Text style={styles.text}>Calculator</Text></Link>
                </View>
            </View>
            <Text style={styles.menuRight} onPress={() => ToggleMenu()}></Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        marginTop: 0,
        padding: 10
    },
    head: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginBottom: 'auto'
    },
    menu: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(255,255,255)',
        position: 'absolute',
        zIndex: 100,
        top: 0,
        left: 0,
        bottom: 0,
        height: '100%',
        width: '50%',
    },
    menuRight: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        zIndex: 101,
        top: 0,
        right: 0,
        bottom: 0,
        height: '100%',
        width: '50%',
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
})

export default Menu
