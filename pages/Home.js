/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {TouchableOpacity, Platform, StyleSheet,ScrollView, Text, View, Image, Dimensions, TextInput } from 'react-native';
import Swiper from 'react-native-swiper';
const { Width, height } = Dimensions.get('window');
import { Actions,Tabs } from 'react-native-router-flux'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class Home extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      swiperShow: false,
      list:[],
      listImg:[
        '../img/xingfang.png',
        '../img/ershoufang.png',
        '../img/zufang.png',
        '../img/dituzhaofang.png',
      ]
    };
  }
  getList(){
    fetch('http://192.168.0.100/api/index/index',{
        method: 'POST'
    }).then(Response=>{
      return Response.json()
    }).then(res=>{
      console.log(res.data);
      this.setState({
        list:res.data
      })
    })
  }
  componentDidMount() {
    this.getList();
    setTimeout(() => {
      this.setState({
        swiperShow: true,
      });
    }, 0)
  }
  navigateTo(index){
    if(index==3){
      Actions.map();
    }else{
      Actions.house();
    }
    
  }
  navagtePush(url){
    Actions.push(url)
}
  demo(){
    Actions.push('house');
  }
  render() {
    var TabIconth = <View><Text>111</Text></View>;
    let { navigate } = this.props.navigation;
    let list = this.state.list;
    let item = list.map((item,index)=>{
      return(
        <TouchableOpacity onPress={this.navigateTo.bind(this,index)}key={index}>
        <View style={styles.list} >
        <Image style={styles.wt}  source={{uri:item.img}} />
        <Text style={styles.TextCenter}>{item.name}</Text>
        </View>
        </TouchableOpacity>
      )
    })
    if (this.state.swiperShow) {
      return (
        <ScrollView style={styles.scroll}>  
        <View style={styles.main}>
          <View style={styles.swiper} >
          <Swiper 
            autoplay={true}
          >
            <View>
              <Image source={require('../img/b.png')} style={styles.img} />
            </View>
            <View>
              <Image source={require('../img/b.png')} style={styles.img} />
            </View>
          </Swiper>
          </View>
          <View style={styles.kell}>
          
          <View style={styles.search}>
          <TouchableOpacity ><View style={styles.flex}><Text>厦门市</Text><Image  source={require('../img/jiantou.png')} /></View></TouchableOpacity>
          <TouchableOpacity onPress={this.navagtePush.bind(this,'search')}><Text  style={styles.input}>你想住在哪里？</Text></TouchableOpacity>
          </View>
          <Image style={styles.tail} source={require('../img/xiaoxi.png')} />
          </View>
          <View style={styles.item}>
           {item}
          </View>
          <View style={styles.border}></View>
          <View style={styles.item}>
          <TouchableOpacity onPress={this.navagtePush.bind(this,'news')}>
            <View style={styles.listk}>
            <Image style={styles.wtk}  source={require('../img/fangczx.png')} />
           
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.navigateTo.bind(this)}>
            <View style={styles.listk}><Image style={styles.wtk}  source={require('../img/chachengjaio.png')} />
           
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.navagtePush.bind(this,'jisuan')}>
            <View style={styles.listk}><Image style={styles.wtk}  source={require('../img/fangdaijisuan.png')} />
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.navagtePush.bind(this,'line')}>
            <View style={styles.listk}><Image style={styles.wtk}  source={require('../img/lianxiwomen.png')} />
           
            </View>
            </TouchableOpacity>
          </View>
          <View style={styles.border}></View>
          <View style={styles.row}>
            <View><Text>为您推荐</Text></View>
            <View style={styles.heng} >
            <View style={styles.pd} ><Text>二手房</Text></View>
            <View style={styles.pd}><Text>新房</Text></View>
            
            <View style={styles.pd}><Text>租房</Text></View>
            </View>
          </View>
          <View  style={styles.ul}>
          
          <View  style={styles.li} >
          <View><Image  source={require('../img/b.png')} style={styles.image}  /></View>
          <View style={styles.left}>
            <View><Text>表题</Text></View>
            {TabIconth}
            <View><Text>表题</Text></View>
            <View><Text>表题</Text></View>
            <View><Text>表题</Text></View>
          </View>
          </View>
          <View  style={styles.li}>
          <View><Image source={require('../img/b.png')} style={styles.image}  /></View>
          <View style={styles.left}>
            <View><Text>表题</Text></View>
            <View><Text>表题</Text></View>
            <View><Text>表题</Text></View>
            <View><Text>表题</Text></View>
          </View>
          </View>
          <View  style={styles.li}>
          <View><Image source={require('../img/b.png')} style={styles.image}  /></View>
          <View style={styles.left}>
            <View><Text>表题</Text></View>
            <View><Text>表题</Text></View>
            <View><Text>表题</Text></View>
            <View><Text>表题</Text></View>
          </View>
          </View>
          <View  style={styles.li}>
          <View><Image source={require('../img/b.png')} style={styles.image}  /></View>
          <View style={styles.left}>
            <View><Text>表题</Text></View>
            <View><Text>表题</Text></View>
            <View><Text>表题</Text></View>
            <View><Text>表题</Text></View>
          </View>
          </View>
          <View  style={styles.li}>
          <View><Image source={require('../img/b.png')} style={styles.image}  /></View>
          <View style={styles.left}>
            <View><Text>表题</Text></View>
            <View><Text>表题</Text></View>
            <View><Text>表题</Text></View>
            <View><Text>表题</Text></View>
          </View>
          </View>
          <View  style={styles.li}>
          <View><Image source={require('../img/b.png')} style={styles.image}  /></View>
          <View style={styles.left}>
            <View><Text>表题</Text></View>
            <View><Text>表题</Text></View>
            <View><Text>表题</Text></View>
            <View><Text>表题</Text></View>
          </View>
          </View>
          <View  style={styles.li}>
          <View><Image source={require('../img/b.png')} style={styles.image}  /></View>
          <View style={styles.left}>
            <View><Text>表题</Text></View>
            <View><Text>表题</Text></View>
            <View><Text>表题</Text></View>
            <View><Text>表题</Text></View>
          </View>
          </View>
          <View  style={styles.li}>
          <View><Image source={require('../img/b.png')} style={styles.image}  /></View>
          <View style={styles.left}>
            <View><Text>表题</Text></View>
            <View><Text>表题</Text></View>
            <View><Text>表题</Text></View>
            <View><Text>表题</Text></View>
          </View>
          </View>
          
        </View>
        </View>
        </ScrollView>
      )
    } else {
      return (
        <View style={{ height: 200 }}>
          <Image source={require('../img/b.png')} style={styles.img} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  kell:{
    position: 'absolute',
    top: 0,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    width:460,
    height:40
  },
  tail:{
    width:27,
    height:27,
    marginTop:17
  },
  jt:{
    width: 14,
    height:12
  },
  border:{
    width:Width,
    height:11,
    backgroundColor:'#EFEFF4',
    marginTop:20
  },
  scroll:{
    backgroundColor:'#ffffff'
  },
  li:{
    flexDirection:'row',
    marginTop:30
  },
  left:{
    paddingLeft:20
  },
  flex:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginLeft:20,
    width:70
  },
  ul:{
    width:220,
    alignItems: 'center',
    display:'flex',
    flexDirection:'column'
  },
  image:{
    width:120,
    height:90
  },
  heng:{
    flexDirection:'row',
    justifyContent:'flex-end',
    marginRight:30
  },
  pd:{
    marginRight:10
  },
  row:{
    width:450,
    marginLeft:30,
    marginTop:20,
    marginBottom:10
  },
  swiper: {
    height:200,
    width: Width
  },
  item: {
    flexDirection:'row',
    width: Width,
    marginTop:30
  },
  wt:{
    width: 60,
    height:60,
    marginBottom:5
  },
  list:{
    alignItems:'center',
    marginLeft:27,
    marginRight:27,
    width: 60,
    justifyContent: 'center',
    textAlign:'center'
  },
  listk:{
    alignItems:'center',
    marginLeft:24,
    marginRight:24,
    width: 70,
    justifyContent: 'center',
    textAlign:'center'
  },
  wtk:{
    width: 70,
    height:80,
    marginBottom:5
  },
  textCenter:{
    display:'flex',
    paddingTop: 20
  },
  input: {
    width:300,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginLeft:20
  },
  main: {
    position: 'relative',
    width: Width,
    height: 'auto'
  },

  img: {
    width: Width,
    height: 200
  },
  search: {
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems:'center',
    display: 'flex',
    width: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
