import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Global/Colors";
import { AntDesign } from "@expo/vector-icons";

const Header = ({ route, navigation }) => {
    let title
    if (route.name === 'Home') title = 'Home'
    else if (route.name === 'ItemListCategory') title = route.params.category
    else if (route.name === 'Detail') title = route.params.title
    else title = route.name
    
    return (
        <View style={styles.containerHeader}>
            <Text style={styles.text}>{title}</Text>
            {route.name !== "Home" ? (
                <Pressable
                    style={styles.pressable}
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name="back" size={24} color="black" />
                </Pressable>
            ) : null}
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    containerHeader: {
        backgroundColor: colors.azulClaro,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 130,
        position: "relative",
    },
    text: {
        color: 'white',
        fontSize: 30,
        width: '60%',
        textAlign: 'center',
        fontFamily: "Josefin",
    },
    pressable: {
        position: "absolute",
        right: 30,
        top: "45%",
    },
});

