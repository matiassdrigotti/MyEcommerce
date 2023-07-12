import { Image, StyleSheet, Text } from 'react-native'
import React from 'react'
import Card from './Cards'

const ProductItem = ({item}) => {
  return (
    <Card
      additionalStyle={styles.additionalStylesCard}
    >
        <Text style={styles.textCategory}>{item.title}</Text>
        <Image 
          resizeMode='cover'
          style = {styles.image}
          source={{uri: item.images[0]}}
        />
    </Card>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  image: {
    height: 90,
    width: 100,
    borderRadius: 10
  },
  additionalStylesCard: {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-between'
  }
})