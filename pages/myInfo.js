import React, { Component } from 'react'
import { View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
class MyInfo extends Component{
    getFlie(){
        setTimeout(() => {
        ImagePicker.openPicker({
            width: 300,  
            height: 400,  
            cropping: true
          }).then(image => {
            console.log(image);
            this.setState({
                header:image.path
            })
          });
        },1000)
    }
    render(){
     
        return(
            <View>
                <View style={styles.item}>
                    <View style={styles.list}>
                        <Text>头像</Text>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={this.getFlie.bind(this)}>
                            <Image style={styles.varar} source={require('../img/mr.png')}  />
                            </TouchableOpacity>
                            <Image style={styles.back} source={require('../img/backer.png')}  />
                        </View>
                    </View>
                    <View style={styles.ol}>
                        <Text>用户昵称</Text>
                        <View style={styles.header}>
                            <Text>爱琴弦</Text>
                            <Image style={styles.back} source={require('../img/backer.png')}  />
                        </View>
                    </View>
                    <View style={styles.border}></View>
                    <View style={styles.ol}>
                        <Text>手机号</Text>
                        <View style={styles.header}>
                            <Image style={styles.back} source={require('../img/backer.png')}  />
                        </View>
                    </View>
                    <View style={styles.ol}>
                        <Text>绑定微信</Text>
                        <View style={styles.header}>
                            <Image style={styles.back} source={require('../img/backer.png')}  />
                        </View>
                    </View>
                    <View style={styles.ol}>
                        <Text>密码登录</Text>
                        <View style={styles.header}>
                            <Image style={styles.back} source={require('../img/backer.png')}  />
                        </View>
                    </View>
                </View>
                <View style={styles.btn}>
                    <Text style={styles.layout}>退出登录</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    layout:{
        color:'#333333',
        fontSize: 14,
    },
    btn:{
        height:50,
        marginTop: 40,
        backgroundColor:'#ffffff',
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center'
    },
    border:{
        height:10,
        backgroundColor:'#F1F1F1'
    },
    ol:{
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        height:60,
        alignItems: 'center',
        marginLeft :20,
        paddingRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E6E6E6',
    },
    item:{
        backgroundColor:'#ffffff'
    },
    list:{
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        height:80,
        alignItems: 'center',
        marginLeft :20,
        paddingRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E6E6E6',
    },
    varar:{
        width:60,
        height:60
    },
    back:{
        width:8,
        height:16,
        marginLeft: 20,
    },
    header:{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center'
    }
})

export default MyInfo;