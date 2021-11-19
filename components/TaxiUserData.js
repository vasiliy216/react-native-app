import React from 'react'
import { SafeAreaView, View, StyleSheet, TextInput, Button, Text } from "react-native";

const TaxiUserData = ({ UserData }) => {

    const [text, onChangeText] = React.useState({
        streetFrom: '',
        hauseFrom: '',
        flatFrom: '',
        streetTo: '',
        hauseTo: '',
        flatTo: ''
    });

    const DataForm = () => {
        UserData(text);
    }

    return (
        <SafeAreaView style={styles.registerBody}>
            <View style={styles.itemBody}>
                <Text style={styles.textTitle}>Point from</Text>
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={value => onChangeText({ ...text, streetFrom: value })}
                        value={text.streetFrom}
                        placeholder="Street"
                        placeholderTextColor="#9e9e9e"
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={value => onChangeText({ ...text, hauseFrom: value })}
                        value={text.hauseFrom}
                        placeholder="House"
                        placeholderTextColor="#9e9e9e"
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={value => onChangeText({ ...text, flatFrom: value })}
                        value={text.flatFrom}
                        placeholder="Flat"
                        placeholderTextColor="#9e9e9e"
                    />
                </View>
                <Text style={styles.textTitle}>Point to</Text>
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={value => onChangeText({ ...text, streetTo: value })}
                        value={text.streetTo}
                        placeholder="Street"
                        placeholderTextColor="#9e9e9e"
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={value => onChangeText({ ...text, hauseTo: value })}
                        value={text.hauseTo}
                        placeholder="House"
                        placeholderTextColor="#9e9e9e"
                    />
                </View>
                <View style={{ marginBottom: 15 }}>
                    <TextInput
                        style={styles.input}
                        onChangeText={value => onChangeText({ ...text, flatTo: value })}
                        value={text.flatTo}
                        placeholder="Flat"
                        placeholderTextColor="#9e9e9e"
                    />
                </View>
                <Button title="Ok" onPress={DataForm} />
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
    textTitle: {
        margin: 15
    },
    input: {
        width: 250,
        height: 'auto',
        margin: 15,
        borderBottomWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        // flex: 1
    },
    validation: {
        padding: 10
    }
})

export default TaxiUserData
