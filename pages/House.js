import React,{ Component } from 'react';
import { StyleSheet,ScrollView, Text, View, Image, Dimensions, TextInput,TouchableOpacity  } from 'react-native';
import { Actions,Tabs } from 'react-native-router-flux'
class House extends Component{
    constructor(props){
        super(props)
        this.navgateToHome = this.navgateToHome.bind(this)
    }
    navgateTo(){
        Actions.info()
    }
    navgateToHome(){
        Actions.home()
    }
  
    render(){
        return(
            <ScrollView>
            <View>
                <View>
                <View style={styles.header}>
                    <TouchableOpacity onPress={this.navgateToHome}>
                        <Image Image style={styles.back}  source={require('../img/back.png')} />
                    </TouchableOpacity>
                        <View style={styles.ci}><Image style={styles.search} source={require('../img/search.png')} /><TextInput  placeholder="请输入小区或商圈名称"></TextInput></View>
                        <View><Image style={styles.tail} source={require('../img/tail.png')} /></View>
                    </View>
                    <View style={styles.nav}>
                        <Text style={styles.text}>区域</Text>
                        <Text style={styles.text}>区域</Text>
                        <Text style={styles.text}>区域</Text>
                        <Text style={styles.text}>区域</Text>
                    </View>
                  
                    <View style={styles.item}>
                    <TouchableOpacity onPress={this.navgateTo.bind(this)}>
                        <View style={styles.list} >
                            <Image style={styles.listImg} source={require('../img/b.png')} />
                            <View>
                            <Text style={styles.text}>区域</Text>
                        <Text style={styles.text}>区域</Text>
                        <Text style={styles.text}>区域</Text>
                        <Text style={styles.text}>区域</Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                        <View style={styles.list}>
                            <Image style={styles.listImg} source={require('../img/b.png')} />
                            <View>
                            <Text style={styles.text}>区域</Text>
                        <Text style={styles.text}>区域</Text>
                        <Text style={styles.text}>区域</Text>
                        <Text style={styles.text}>区域</Text>
                            </View>
                        </View>
                        
                        <View style={styles.list}>
                            <Image style={styles.listImg} source={require('../img/b.png')} />
                            <View>
                            <Text style={styles.text}>区域</Text>
                        <Text style={styles.text}>区域</Text>
                        <Text style={styles.text}>区域</Text>
                        <Text style={styles.text}>区域</Text>
                            </View>
                        </View>
                        <View style={styles.list}>
                            <Image style={styles.listImg} source={require('../img/b.png')} />
                            <View>
                            <Text style={styles.text}>区域</Text>
                        <Text style={styles.text}>区域</Text>
                        <Text style={styles.text}>区域</Text>
                        <Text style={styles.text}>区域</Text>
                            </View>
                        </View>
                        <View style={styles.list}>
                            <Image style={styles.listImg} source={require('../img/b.png')} />
                            <View>
                            <Text style={styles.text}>区域</Text>
                        <Text style={styles.text}>区域</Text>
                        <Text style={styles.text}>区域</Text>
                        <Text style={styles.text}>区域</Text>
                            </View>
                        </View>
                        <View style={styles.list}>
                            <Image style={styles.listImg} source={require('../img/b.png')} />
                            <View>
                            <Text style={styles.text}>区域</Text>
                        <Text style={styles.text}>区域</Text>
                        <Text style={styles.text}>区域</Text>
                        <Text style={styles.text}>区域</Text>
                            </View>
                        </View>
                        <View style={styles.list}>
                            <Image style={styles.listImg} source={require('../img/b.png')} />
                            <View>
                            <Text style={styles.text}>区域</Text>
                        <Text style={styles.text}>区域</Text>
                        <Text style={styles.text}>区域</Text>
                        <Text style={styles.text}>区域</Text>
                            </View>
                        </View>
                        <View style={styles.list}>
                            <Image style={styles.listImg} source={require('../img/b.png')} />
                            <View>
                            <Text style={styles.text}>区域</Text>
                        <Text style={styles.text}>区域</Text>
                        <Text style={styles.text}>区域</Text>
                        <Text style={styles.text}>区域</Text>
                            </View>
                        </View>
                        <View style={styles.list}>
                            <Image style={styles.listImg} source={require('../img/b.png')} />
                            <View >
                            <Text style={styles.text}>区域</Text>
                        <Text style={styles.text}>区域</Text>
                        <Text style={styles.text}>区域</Text>
                        <Text style={styles.text}>区域</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            </ScrollView> 
        );
    }
}

const styles = StyleSheet.create({
    ci:{
        display:'flex',
        flexDirection:'row',
        width:328,
        height:40,
        alignItems: 'center',
        backgroundColor:'#F6F6F6',
        paddingLeft:20
    },
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems: 'center',
        height:70,
        backgroundColor:'#ffffff'
    },
    tail:{
        width:24,
        height:24
    },
    search:{
        width:16,
        height:17
    },
    back:{
        width:13,
        height:24
    },
    item:{
        backgroundColor:'#ffffff'
    },
    nav:{
        display:'flex',
        flexDirection:'row',
        width:420,
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent:'space-around',
        height:35,
        marginTop: 15,
        
    },
    pd:{
        paddingLeft:20
    },
    list:{
        width:420,
        marginLeft: 'auto',
        marginRight: 'auto',
        display:'flex',
        flexDirection:'row',
        marginTop:20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E6E6E6',
    },
    text:{
        paddingLeft:20,
        paddingBottom:5
    },
    listImg:{
        width:120,
    height:90
    }
})

export default House;