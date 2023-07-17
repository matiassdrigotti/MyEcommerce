import { Pressable, SafeAreaView, StyleSheet, Text, } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import ItemListCategory from '../Screens/ItemListCategory'
import ItemDetail from '../Screens/ItemDetail'
import Home from '../Screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'react-native'

const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
    <SafeAreaView style = {styles.container}>
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={
                    ({route, navigation}) => (
                        {
                            header: () => {
                                return <Header
                                    route = {route}
                                    navigation = {navigation}
                                />
                            },
        
                        }
                    )
                }            
            >
                <Stack.Screen 
                    name='Home'
                    component={Home}
                />
                <Stack.Screen
                    name='ItemListCategory'
                    component={ItemListCategory}
                />
                <Stack.Screen
                    name='Detail'
                    component={ItemDetail}
                />
            </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
    
  )
}

export default Navigator;

const styles = StyleSheet.create({
    container: {
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
  })




  /*

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Header from './src/Components/Header';
import Home from './src/Screens/Home';
import ItemListCategory from './src/Screens/ItemListCategory';
import { useFonts } from 'expo-font';
import { useState } from 'react';

export default function App() {
  const image = {uri: 'https://bandurriadeco.com.ar/tienda/wp-content/uploads/2020/06/Fondo.Madera.10.jpg'};
  
  const [categorySelected, setCategorySelected] = useState("")

  const [fontsLoaded] = useFonts({
    'Josefin': require('./src/Assets/Fonts/Josefin_Sans/JosefinSans-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }
  //Acá se manejará el estado para seleccionar una category y un producto
  
  return (
    <View style = {styles.container}>
      <ImageBackground source={image} resizeMode={'cover'} style={styles.image}>
        <Header/>
        {
          categorySelected ? 
          <ItemListCategory 
            category={categorySelected}
            setCategory={setCategorySelected}
          /> :
          <Home
            setCategorySelected={setCategorySelected}
          />
        }
     </ImageBackground> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
})

*/