/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Icon,Platform, StyleSheet,AsyncStorage,ScrollView, Text, View, Image, Dimensions, TextInput } from 'react-native';
import Swiper from 'react-native-swiper';
import { Router,Drawer,Scene, Tabs,Modal,Actions,Lightbox } from 'react-native-router-flux';//引入包
import Home from './pages/Home'
import User from './pages/User'
import House from './pages/House'
import Fabu from './pages/Fabu'
import Login from './pages/login'
import Map from './pages/map';
import Info from './pages/Info'
import Search from './pages/Search'
import News from './pages/news';
import Jisuan from './pages/jisuan'
import Line from './pages/Line'
import myInfo from './pages/myInfo'
const { Width, height } = Dimensions.get('window')
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



const TabIconHome = ({focused , title}) => {
  return (
    <View>
      <Image source={focused ? require('./img/hone.png'):require('./img/honea.png')} style={{width:30,height:30}} />
    <Text style={{color: focused  ? '#FF5555' : '#BCBCBC'}}>{title}</Text>
    </View>
  );
};



const TabIconFabu = ({focused , title}) => {
  return (
    <View>
      <Image source={focused ? require('./img/fabu.png'):require('./img/fabub.png')} style={{width:30,height:30}} />
    <Text style={{color: focused  ? '#FF5555' : '#BCBCBC'}}>{title}</Text>
    </View>
  );
};

const TabIconMy = ({focused , title}) => {
  return (
    <View>
      <Image source={focused ? require('./img/my.png'):require('./img/myc.png')} style={{width:30,height:30}} />
    <Text style={{color: focused  ? '#FF5555' : '#BCBCBC'}}>{title}</Text>
    </View>
  );
};

export default class App extends Component {
  goToLogin(){
    AsyncStorage.getItem('token',(err,res)=>{
        if(!res){
          Actions.login();
        }else{
          Actions.fabu();
        }
    })
    
    
  }
  render() {
    return (
      <Router>
       
          <Scene key="root"
            
          >
          <Tabs
          swipeEnabled={true}
          wrap={false}
          hideNavBar
          swipeEnabled
          animationEnabled={true}
          upperCaseLabel={true}
          showLabel={false}
          tabBarStyle={{ backgroundColor: "#fff", borderTopWidth: 1, borderTopColor: '#ddd',height:70,textAlign:'center' }}
          tabStyle={{ backgroundColor: "#fff" }}
          labelStyle={{ fontSize: 14 }}
          activeBackgroundColor="#2aabe4"
          inactiveBackgroundColor="#999"
          activeTintColor='#2aabe4'
          inactiveTintColor='#999'
        >
            <Scene key="home"
              component={Home}
              icon={TabIconHome}
              title="首页"
              hideNavBar="true"
              initial
              tabs={true}
            />
             <Scene
              key="fabu"
              component={Fabu}
              icon={TabIconFabu}
              title="发布"
              tabs={true}
              tabBarOnPress={this.goToLogin.bind(this)}
            />
             
            <Scene
              key="user"
              component={User}
              icon={TabIconMy}
              title="我的"
              tabs={true}
            />
           
             </Tabs>
            
             <Scene
              key="house"
              component={House}
              title="二手房"
              hideNavBar
            />
             <Scene
              key="search"
              component={Search}
              title="二手房"
              hideNavBar
            />
            <Scene
              key="login"
              component={Login}
              title="登录"
            />
             <Scene
              key="map"
              component={Map}
              title="地图找房"
            />
             <Scene
              key="info"
              component={Info}
              title="地图找房"
            />
            <Scene
              key="news"
              component={News}
              title="新闻资讯"
              hideNavBar
            />
             <Scene
              key="jisuan"
              component={Jisuan}
              title="房贷计算器"
            />
            <Scene
              key="line"
              component={Line}
              title="联系我们"
            />
             <Scene
              key="myInfo"
              component={myInfo}
              title="账户信息"
            />
          </Scene>
      
      </Router>
    );

  }
}

const styles = StyleSheet.create({
  li: {
    flexDirection: 'row'
  },
  left: {
    paddingLeft: 20
  },
  ul: {
    width: 220,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  image: {
    width: 120,
    height: 90
  },
  heng: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 30
  },
  pd: {
    marginRight: 10
  },
  row: {
    width: 450,
    marginLeft: 30,
    marginTop: 20,
    marginBottom: 10
  },
  swiper: {
    height: 200,
    width: Width
  },
  item: {
    flexDirection: 'row',
    width: Width,
    marginTop: 30
  },
  wt: {
    width: 60,
    height: 60,
    marginBottom: 5
  },
  list: {
    alignItems: 'center',
    marginLeft: 27,
    marginRight: 27,
    width: 60,
    justifyContent: 'center',
    textAlign: 'center'
  },
  listk: {
    alignItems: 'center',
    marginLeft: 24,
    marginRight: 24,
    width: 70,
    justifyContent: 'center',
    textAlign: 'center'
  },
  wtk: {
    width: 70,
    height: 80,
    marginBottom: 5
  },
  textCenter: {
    display: 'flex',
    paddingTop: 20
  },
  input: {
    width: 350,
    marginLeft: 'auto',
    marginRight: 'auto',
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
    position: 'absolute',
    top: 0,
    left: 50,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
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
