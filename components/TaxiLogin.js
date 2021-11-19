import React from 'react'
import { SafeAreaView, View, StyleSheet, TextInput, Button, Text } from "react-native";
import { Link } from 'react-router-native'

const TaxiLogin = ({ LoginUser }) => {

    const [text, onChangeText] = React.useState({
        number: '',
        name: '',
        surname: ''
    });

    const LoginRequare = () => {
        LoginUser(text);
        onChangeText({
            number: '',
            name: '',
            surname: ''
        });
        
    }

    return (
        <SafeAreaView style={styles.registerBody}>
            <View style={styles.itemBody}>
                <View style={styles.inputItem}>
                    <TextInput
                        style={styles.input}
                        onChangeText={value => onChangeText({ ...text, number: value })}
                        value={text.number}
                        placeholder="Telephon number"
                        placeholderTextColor="#9e9e9e"
                    />
                </View>
                <View style={styles.inputItem}>
                    <TextInput
                        style={styles.input}
                        onChangeText={value => onChangeText({ ...text, name: value })}
                        value={text.name}
                        placeholder="Name"
                        placeholderTextColor="#9e9e9e"
                    />
                </View>
                <View style={styles.inputItem} style={{ marginBottom: 15 }}>
                    <TextInput
                        style={styles.input}
                        onChangeText={value => onChangeText({ ...text, surname: value })}
                        value={text.surname}
                        placeholder="Surname"
                        placeholderTextColor="#9e9e9e"
                    />
                </View>
                <Button title="Login" onPress={LoginRequare}/>
                <Link to="/taxi" style={styles.validation}><Text>Create Account?</Text></Link>
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
        overflow: 'hidden'
    },
    inputItem: {

    },
    input: {
        width: 200,
        height: 'auto',
        margin: 15,
        borderBottomWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        // flex: 1
    },
    validation: {
        padding: 10,
        textAlign: 'right'
    }
})

export default TaxiLogin
