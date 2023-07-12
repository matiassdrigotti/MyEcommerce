import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'

const Header = () => {
  return (
    <View 
        style={styles.containerHeader}>
      <Text style ={styles.text}>My Ecommerce</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    containerHeader: {
        color: colors.lightPink,
        height: '10%',
        backgroundColor: colors.azulClaro,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 35,
        fontFamily: 'Josefin'
    }
})