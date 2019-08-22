import React, { Component } from 'react';
import { AsyncStorage, View,Text,TextInput,StyleSheet,Dimensions,Image,ToastAndroid} from 'react-native';
const { Width, height } = Dimensions.get('window');
import { Actions } from 'react-native-router-flux'
class Login extends Component{
    login(){
        AsyncStorage.setItem('token','admin',(err,res)=>{
            ToastAndroid.show('登录成功', 1000);
            Actions.home();
        })
        
    }
    render() {
        return(
            <View style={styles.bg}>
                <View style={styles.list}> 
                <TextInput placeholder="请输入手机号" placeholderTextColor="#CACCCD"  maxLength={11} autoFocus={true} />
                </View>
                <View style={styles.list}>
                <TextInput secureTextEntry={true} style={styles.password} placeholder="请输入6-12位密码"   placeholderTextColor="#CACCCD"      />
                <Image style={styles.show} source={require('../img/11.png')} />
                </View>
                <View style={styles.row}>
                    <Text  style={styles.left}>立即注册</Text>
                    <Text   style={styles.right}>忘记密码</Text>
                </View>
                <View style={styles.btn}>
                    <Text onPress={this.login.bind(this)} style={styles.center}>
                        登录
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    password:{
        width:300
    },
    show:{
        width:23,
        height:22,
        position:'absolute',
        right:15,
        top:15
    },
    row:{
        width:420,
        marginLeft:'auto',
        marginRight: 'auto',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:15
    },
    left:{

    },
    right:{
        
    },
    bg:{
        position:'absolute',
        width:480,
        height:height,
        backgroundColor:'#ffffff'
    },
    list:{
        position:'relative',
        width:420,
        marginLeft:'auto',
        marginRight: 'auto',
        height:50,  
        borderBottomColor:'#ECECEC',
        borderBottomWidth: 1,
        lineHeight:50,
        marginTop:10
    },
    center:{
        textAlign:'center',
        lineHeight:50,
        color:'rgba(255,255,255,1)',
        fontSize: 18,
    },
    btn:{
        width:400,
        height:50,
        backgroundColor:'#FF5555',
        marginLeft:'auto',
        marginRight: 'auto',
        lineHeight:50,
        marginTop: 50,
    }
})

export default Login;