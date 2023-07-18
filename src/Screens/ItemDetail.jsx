import { Button, Image, Pressable, StyleSheet, Text, View, useWindowDimensions, ImageBackground} from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from "../Data/products.json";

const ItemDetail = ({ navigation, route }) => {

  const image = {uri:'https://bandurriadeco.com.ar/tienda/wp-content/uploads/2020/06/Fondo.Madera.10.jpg'};  
  const {productId: idSelected} = route.params

  const [product, setProduct] = useState(null);
  const [orientation, setOrientation] = useState("portrait");
  const { width, height } = useWindowDimensions();

  useEffect(() => {
      if (width > height) setOrientation("landscape");
      else setOrientation("portrait");
  }, [width, height]);

  useEffect(() => {
      //Encontrar el producto por su id
      const productSelected = allProducts.find(
          (product) => product.id === idSelected
          );
      setProduct(productSelected);
  }, [idSelected]);

  return (
      <View>
        <ImageBackground source={image} resizeMode={'cover'} style={styles.imageFondo}>
            {product ? (
                <View
                    style={
                        orientation === "portrait"
                            ? styles.mainContainer
                            : styles.mainContainerLandscape
                    }
                >
                    <Image
                        source={{ uri: product.images[0] }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <View style={styles.textContainer}>
                        <Text style = {styles.text}>{product.title}</Text>
                        <Text style = {styles.text}>{product.description}</Text>
                        <Text style = {styles.text}>${product.price}</Text>
                        <Button title="Add cart"></Button>
                    </View>
                </View>
            ) : null}
        </ImageBackground>  
      </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  mainContainer: {   
      position:'absolute',    
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 500,
  },
  mainContainerLandscape: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: 10,
  },
  image: {
      width: 300,
      height: 250,
  },
  imageFondo: {
    flex: 1,
    position: 'relative',
    height: 700,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
   
},
  textContainer: {
      padding: 10,
      flexDirection: "column",
      alignItems:'center',
      justifyContent:'center',
  },
  text: {
      fontSize: 20,
      color: 'white',
  },
  shadowColor: "#000",

  shadowOffset:{
            width: 0,
            height: 10,
        },
});