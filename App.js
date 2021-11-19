import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native'
import { StyleSheet, View, SafeAreaView } from 'react-native';

import Taxi from './components/Taxi'
import ListView from './components/ListView'
import Menu from './components/Menu'
import Header from './components/Header';
import Calculator from './components/Calculator';

export default function App() {

  const [isMenu, setIsMenu] = React.useState(false);

  const ToggleMenu = () => {
      setIsMenu(!isMenu)
  }

  let menu;

  if (isMenu) menu = <Menu ToggleMenu={ToggleMenu}/>
  else menu = <View></View>

  return (
    <NativeRouter>
      <SafeAreaView style={styles.container}>
        <Header ToggleMenu={ToggleMenu} />
        { menu }
        <Routes>
          <Route path="/*" element={<Taxi />} />
          <Route path="/list-view" element={<ListView />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
        <StatusBar hidden />
      </SafeAreaView>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
