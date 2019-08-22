import React, { Component } from 'react';
import { TouchableOpacity,Platform, StyleSheet, ScrollView, Text, View, Image, Dimensions, TextInput } from 'react-native';
const { Width, height } = Dimensions.get('window');
 import { MapView,Marker } from 'react-native-amap3d';

export default class Map extends Component {
    render() {
        return (
               <MapView style={styles.absoluteFill} >
                   <Marker
  image='flag'
  coordinate={{
    latitude: 39.706901,
    longitude: 116.397972,
  }}
>
  <View >
    <Text>自定义信息窗体</Text>
  </View>
</Marker>
               </MapView>
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