import { Image, Pressable, StyleSheet, Text, useWindowDimensions } from "react-native";
import React from "react";
import Card from "./Card";

const ProductItem = ({ item, navigation }) => {
  
    const { height, width } = useWindowDimensions();

    const onSelect = (id) => {
        navigation.navigate('Detail', {productId: item.id, title: item.title})
    }

    return (
        <Pressable onPress={() => onSelect(item.id)}>
            <Card additionalStyle={styles.additionalStylesCard}>
                <Text
                    style={
                        width > 350 ? styles.textCategory : 
                        styles.textCategorySm
                    }
                >
                    {item.title}
                </Text>
                <Image
                    resizeMode="cover"
                    style={styles.image}
                    source={{ uri: item.images[0] }}
                />
            </Card>
        </Pressable>
    );
};

export default ProductItem;

const styles = StyleSheet.create({
    image: {
        height: 110,
        width: 110,
        minWidth: 150,
        maxWidth: 250,
        borderRadius: 10,
        right: -3,
    },
    additionalStylesCard: {
        flexDirection: "row",
        height: 110,
        justifyContent: "space-between",
    },
    textCategory: {
        width: "50%",
        fontSize: 19,
    },
    textCategorySm: {
        width: "50%",
        fontSize: 15,
    },
});

