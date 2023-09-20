import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

export default function Buttons({onPressedMain, onPressedSec}) {
    return (
        <View style={style.container}>
            <TouchableOpacity onPress={onPressedMain} style={style.mainButton}>
                <Text style={style.buttonLabelMain}>Register to Class</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressedSec} style={style.secButton}>
                <Text style={style.buttonLabelSec}>Clear Form Data</Text>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        width:'95%',
        margin: 10,
        marginTop:30,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    mainButton: {
        padding:20,
        backgroundColor: '#483bc4',
        borderRadius: 10,
    },
    secButton: {
        padding:20,
        backgroundColor: '#483bc4',
        opacity:0.5,
        borderRadius: 10,
    },
    buttonLabelMain: {
        color: '#fff',
    },
    buttonLabelSec: {
        color: '#fff',
    },
})