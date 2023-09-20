import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function FormHeader() {
    return (
        <View>
            <Text style={style.header}>Register</Text>
            <Text style={style.legend}>Sign up to the React - Native Online Class</Text>
        </View>
    );
}

const style = StyleSheet.create({
    header:{
        padding:10,
        paddingBottom:0,
        fontSize: 30,
        fontWeight: "bold",
    },
    legend:{
        padding:10,
        marginBottom:20,
        fontSize: 15,
    },
})