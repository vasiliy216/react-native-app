import React from 'react'
import { SafeAreaView, View, StyleSheet, Button, Text } from "react-native";
import { Link } from 'react-router-native'

const TaxiBody = ({ currentUser, userData }) => {

    const [isTrue, setIsTrue] = React.useState(false)

    let data;
    let success;

    if (Object.keys(userData).length !== 0) data = (
        <Text>
            Taxi will arrive at {userData.streetFrom}, {userData.hauseFrom}, {userData.flatFrom} in
             5 minutes and take you in {userData.streetTo}, {userData.hauseTo}, {userData.flatTo}.
            If you are agree click Call Taxi.
        </Text>
    )
    else data = <Text></Text>

    const SetIsTrue = () => {
        setIsTrue(true);
        setInterval( () => {setIsTrue(false)}, 3000)
    }

    if(isTrue) success = <Text style={styles.success}>Wait for Taxi. Good Luck!</Text>
    else success = <Text></Text>

    return (
        <SafeAreaView style={styles.registerBody}>
            <View style={styles.itemBody}>
                <View style={styles.text}>
                    <Text>{currentUser.name} {currentUser.surname}</Text>
                    <Text>{currentUser.number}</Text>
                </View>
                <Link to="/user-data" style={styles.validation}><Text>SET PATH</Text></Link>
                <View style={{ marginBottom: 'auto', padding: 10 }}>{data}</View>
                <View style={{display: 'flex', alignItems: 'center'}}>{success}</View>
                <Button disabled={Object.keys(userData).length === 0} style={styles.itemButton} onPress={SetIsTrue} title="call taxi" />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    registerBody: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    itemBody: {
        backgroundColor: 'rgba(255,255,255, .9)',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        overflow: 'hidden',
        width: 250,
        height: 400,
        display: 'flex',
        flexDirection: 'column'
    },
    text: {
        padding: 10
    },
    success: {
        padding: 10,
        backgroundColor: '#000',
        color: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        marginBottom: 10
    },
    validation: {
        display: 'flex',
        padding: 10,
        alignItems: 'center',
    },
    itemButton: {

    }
})

export default TaxiBody