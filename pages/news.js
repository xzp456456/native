import React,{ Component } from 'react';
import { StyleSheet,ScrollView, Text, View, Image, Dimensions, TextInput,TouchableOpacity  } from 'react-native';
import { Actions,Tabs } from 'react-native-router-flux'
const { Width, height } = Dimensions.get('window');
class News extends Component{
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
            <ScrollView style={styles.scroll}>
            <View>
                <View>
                <View style={styles.header}>
                    <TouchableOpacity onPress={this.navgateToHome}>
                        
                        <Image Image style={styles.back}  source={require('../img/back.png')} />
                    </TouchableOpacity>
                        <View style={styles.ci}>
                        
                            <Image style={styles.search} source={require('../img/search.png')} /><TextInput placeholder="请输入您想看的内容"></TextInput></View>

                    </View>
                   <View style={styles.newItem}>
                        <View style={styles.newList}>
                            <Text style={styles.fontSize}>楼市调控大复盘：两年600多次调控，房价终 于被按住了？</Text>
                            <Image style={styles.ImgList} source={require('../img/b.png')} />
                        </View>
                        <View style={styles.newList}>
                            <Text style={styles.fontSize}>楼市调控大复盘：两年600多次调控，房价终 于被按住了？</Text>
                            <Image style={styles.ImgList} source={require('../img/b.png')} />
                        </View>
                   </View>
                </View>
               
            </View>
            </ScrollView> 
        );
    }
}

const styles = StyleSheet.create({
    ImgList:{
        width:Width,
        height:161,
        
    },
    fontSize:{
        fontSize:20,
        paddingBottom:10,
        paddingTop:20
    },
    newItem:{
        backgroundColor:'#ffffff',
        marginTop:10
    },
    newList:{
        paddingBottom:30,
        marginLeft:20,
        marginRight:20,
        borderBottomWidth:1,
        borderBottomColor: '#E3E5E9'
    },
    center:{
        backgroundColor:'#ffffff'
    },
    item:{
        marginLeft:20,
        marginRight:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        flexWrap: 'wrap',
        marginBottom: 30,
    },
    lke:{
        paddingTop: 5,
        paddingLeft:10,
        paddingRight: 10,
        paddingBottom:5,
        backgroundColor:'#F6F6F6',
        alignItems:'center',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        marginLeft:15,
        marginTop:15
    },
    lk:{
        width:61,
        height:27,
        backgroundColor:'#F6F6F6',
        alignItems:'center',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        marginLeft:20,
        marginTop:20
    },
    litk:{
        color:'#383838'
    },
    lit:{
        textAlign:'center',

    },
    lits:{
        fontSize:12
    },
    text:{
        color:'#392E14'
    },
    scroll:{
    },
    main:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginLeft:20,
        marginRight:20,
        height:40
    },
    shuax:{
        width:17,
        height:17
    },
    ms:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    jt:{
        width:10,
        height:5,
        marginLeft:10,
        marginRight:10
    },
    ci:{
        display:'flex',
        flexDirection:'row',
        width:410,
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

export default News;