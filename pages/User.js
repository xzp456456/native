/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { TouchableOpacity,Platform, StyleSheet, ScrollView, Text, View, Image, Dimensions, TextInput, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux'
const { Width, height } = Dimensions.get('window')
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class User extends Component {
  navgateTo(url){
    Actions.push(url)
  }
  render() {
    return (
      <View>
        <View>
          <ImageBackground style={styles.header} source={require('../img/bgk.png')}>
            <Image style={styles.set} source={require('../img/sz.png')} />
            <Image style={styles.varavar} source={require('../img/mr.png')} />
            <View style={styles.row} >
              <Text style={styles.textCenter}>133****3102</Text>
            <Text style={styles.live}>业主</Text>
            </View>
         
          </ImageBackground>
          <TouchableOpacity onPress={this.navgateTo.bind(this,'myInfo')}>
          <View><Text style={styles.textCenterdatem}>查看并编辑个人资料</Text></View>
          </TouchableOpacity>
          <View>
            <Text style={styles.shouchang}>我的收藏</Text>
          <View>
              <View style={styles.list}>
                <View style={styles.pd}>
                  <Image style={styles.li} source={require('../img/esf.png')} />
                  <Text style={styles.text}>二手房</Text>
                  </View>
                <View style={styles.pd}>
                  <Image style={styles.li} source={require('../img/xf.png')} />
                  <Text style={styles.text}>新房</Text>
                </View>
                <View style={styles.pd}>
                  <Image style={styles.li} source={require('../img/zf.png')} />
                  <Text style={styles.text}>租房</Text>
                </View>
              </View>
            </View>
            
          </View>
          <View>
            <Text style={styles.shouchang}>常用功能</Text>
          <View>
              <View style={styles.list}>
                <View style={styles.pd}>
                  <Image style={styles.li} source={require('../img/bf.png')} />
                  <Text style={styles.text}>我的发布</Text>
                  </View>
                <View style={styles.pd}>
                  <Image style={styles.li} source={require('../img/ll.png')} />
                  <Text style={styles.text}>我的浏览</Text>
                </View>
                <View style={styles.pd}>
                  <Image style={styles.li} source={require('../img/wxx.png')} />
                  <Text style={styles.text}>我的消息</Text>
                </View>
                <View style={styles.pd}>
                  <Image style={styles.li} source={require('../img/bf.png')} />
                  <Text style={styles.text}>身份认证</Text>
                </View>
              </View>
            </View>
            
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pd:{
    marginRight:40,
    marginTop:30,
    marginLeft:15
  },
  list:{
    flexDirection:'row',
    width:430,
    marginLeft: 'auto',
    marginRight:'auto',
    backgroundColor:'#ffffff',
    height:120,
    marginTop:20
  },
  text:{
    textAlign:'center',
    marginTop:10
  },
  li:{
    width:40,
    height:40,
    marginLeft: 'auto',
    marginRight:'auto'
  },
  shouchang:{
    marginLeft:30,
    marginTop:20,
    fontSize:16
  },
  row:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    textAlignVertical:'center',
  },
  live: {
    marginTop: 6,
    width: 52,
    height: 23,
    lineHeight: 23,
    textAlign: 'center',
    borderColor: '#FF5555',
    borderWidth: 1,
    borderRadius: 5,
    marginLeft:10
  },
  textCenterdatem:{
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10
  },
  textCenter: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 5

  },
  varavar: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 90,
    height: 90,
    marginTop: 150,
  },
  header: {
    width: Width,
    height: 300,
    position: 'relative'
  },
  set: {
    position: 'absolute',
    right: 20,
    top: 20,
    width: 30,
    height: 30
  }
});
