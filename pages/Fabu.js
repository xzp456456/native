import React, { Component } from 'react';
import {TouchableOpacity, Platform, StyleSheet,ScrollView, Text, View, Image, Dimensions, TextInput } from 'react-native';
const { Width, height } = Dimensions.get('window');


export default class Fabu extends Component{
    render(){
        return(
            <View>
                <View><Image style={styles.list} source={require('../img/gfjgh.png')}  /></View>
                <View><Image style={styles.list} source={require('../img/hjgdj.png')}  /></View>
                <View><Image style={styles.list} source={require('../img/kjhyk.png')}  /></View>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    list:{
        width:450,
        height:200,
        marginTop: 20,
        marginLeft:'auto',
        marginRight: 'auto',
    }
})