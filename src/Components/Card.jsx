import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'

const Card = ({children, additionalStyle = []}) => {
  return (
    <View style = {[styles.cardContainer, additionalStyle]}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    cardContainer: {
        height: 60,
        width: 350,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 8,
        borderWidth: 2,
        borderColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.azul,
        marginVertical: 10,
        borderRadius: 8,
    }
})
