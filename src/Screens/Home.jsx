import { FlatList, StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'
import categories from '../Data/categories.json'
import CategoryItem from '../Components/CategoryItem'

const Home = ({ navigation }) => {
  
const image = {uri:'https://bandurriadeco.com.ar/tienda/wp-content/uploads/2020/06/Fondo.Madera.10.jpg'};

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode={'cover'} style={styles.image}>
        <FlatList
            data = {categories}
            keyExtractor={category => category}
            renderItem={({item}) => <CategoryItem item={item} navigation = {navigation}/>}
            showsVerticalScrollIndicator={false}
        />
      </ImageBackground> 
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    image: {
      flex: 1,
      justifyContent: 'center',
      },  
    }
})




/*
[
    {   
        "id": 1,
        "category": "smartphones",
        "images": ""
    },
    {   
        "id": 2,
        "category": "laptops",
        "images": ""
    },
    {   
        "id": 3,
        "category": "fragrances",
        "images": ""
    },
    {   
        "id": 4,
        "category": "skincare",
        "images": ""
    }
]
*/