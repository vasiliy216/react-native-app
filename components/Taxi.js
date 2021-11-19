import React from 'react'
import { SafeAreaView, View, StyleSheet, ImageBackground } from "react-native";
import { Route, Routes, useNavigate } from 'react-router-native'

import TaxiRegistration from './TaxiRegistration'
import TaxiLogin from './TaxiLogin'
import TaxiBody from './TaxiBody'
import TaxiUserData from './TaxiUserData'

const Taxi = () => {

    const [user, setUser] = React.useState([])
    const [currentUser, setCurrentUser] = React.useState({})
    const [userData, setUserData] = React.useState({})

    let navigate = useNavigate();

    const RegistUser = (value) => {
        setUser([...user, value]);
        setCurrentUser(value);
        navigate("/home");
    }

    const LoginUser = (value) => {  
        const validUser = user.find(item => item.name === value.name && item.surname === value.surname && item.number === value.number);
        if(Object.keys(validUser).length !== 0) {
            setCurrentUser(validUser);
            navigate("/home");
        }
    }

    const UserData = (value) => {
        setUserData(value);
        navigate("/home");
    }

    return (
        <SafeAreaView style={styles.body}>
            <ImageBackground
                source={require('../assets/taxi-2-scaled.jpg')}
                style={styles.bacground}
                blurRadius={5}
            >
                <Routes>
                    <Route exact path="/*" element={<TaxiRegistration RegistUser={RegistUser} />} />
                    <Route path="/login" element={<TaxiLogin LoginUser={LoginUser} />} />
                    <Route path="/user-data" element={<TaxiUserData UserData={UserData} />} />
                    <Route path="/home" element={<TaxiBody userData={userData} currentUser={currentUser} />} />
                </Routes>
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

export default Taxi
