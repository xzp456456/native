import React, { Component } from 'react';
import { TouchableOpacity,Platform, StyleSheet, ScrollView, Text, View, Image, Dimensions, TextInput } from 'react-native';
const { Width, height } = Dimensions.get('window');
 import { MapView,Marker } from 'react-native-amap3d';

export default class Map extends Component {
    render() {
        return (
              <View>
                  <Text>1111</Text>
              </View>
        )
    }
}

const styles = StyleSheet.create({
    absoluteFill: {
        position: 'absolute',
        width: 500,
        top: 0,
        height: 900,
        zIndex:999
    }
})