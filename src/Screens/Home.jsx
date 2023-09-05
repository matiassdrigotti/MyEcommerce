import { FlatList, StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

import CategoryItem from '../Components/CategoryItem'
import Counter from '../Components/Counter'
import { useGetCategoriesQuery } from '../Services/shopServices'

const Home = ({ navigation }) => {

const {data: categories, isLoading, isError} = useGetCategoriesQuery()
  
const image = {uri:'https://bandurriadeco.com.ar/tienda/wp-content/uploads/2020/06/Fondo.Madera.10.jpg'};

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode={'cover'} style={styles.image}>
        
        <FlatList
            data = {categories}
            keyExtractor={category => category}
            renderItem={({item}) => <CategoryItem item={item} navigation = {navigation}/>}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.wrapper}
            horizontal={false}
            style={styles.flatlist}
        />
      </ImageBackground> 
    </View>
  )
}


export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  wrapper: {
    marginTop: 20,
    gap: 20,
    flexDirection: 'column'
  },
  flatlist: {
    width: '80%',
    
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },   
       
})

/*
container: {
      flex: 1,
    },
    flat: {
      marginTop: 30,
      width: '80%',
    },  
    image: {
      flex: 1,
      justifyContent: 'center',
      },
    wrapper: {
      gap: 20,
    }, */


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