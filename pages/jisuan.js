
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';

// create a component
class Jisuan extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <View style={styles.list}>
                        <Text>总额(万 )</Text>
                        <View style={styles.input}>
                        <TextInput style={styles.textRight} placeholder="0" />
                        <Text>万</Text>
                        </View>
                    </View>
                    <View style={styles.list}>
                        <Text>折扣（%）</Text>
                        <View style={styles.input}>
                        <Text>70 %</Text>
                        </View>
                    </View>
                    <View style={styles.list}>
                        <Text>首付（万 ）</Text>
                        <View style={styles.input}>
                        <TextInput style={styles.textRight} placeholder="0" />
                        <Text>万</Text>
                        </View>
                    </View>
                    <View style={styles.list}>
                        <Text>尾款（万 ）</Text>
                        <View style={styles.input}>
                        <TextInput style={styles.textRight} placeholder="0" />
                        <Text>万</Text>
                        </View>
                    </View>
                    <View style={styles.list}>
                        <Text>年限(年)</Text>
                        <View style={styles.input}>
                        <TextInput style={styles.textRight} placeholder="0" />
                        <Text>万</Text>
                        </View>
                    </View>
                    <View style={styles.list}>
                        <Text>期数（期）</Text>
                        <View style={styles.input}>
                        <TextInput style={styles.textRight} placeholder="0" />
                        <Text>期</Text>
                        </View>
                    </View>
                    <View style={styles.list}>
                        <Text>分期金额（₱）</Text>
                        <View style={styles.input}>
                        <TextInput style={styles.textRight} placeholder="0" />
                        <Text>₱</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={styles.Btn}><Text style={styles.BtnText}>开始计算</Text></View>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    Btn:{
        width:420,
        backgroundColor:'#FF5555',
        marginLeft:'auto',
        marginRight: 'auto',
        height:50,
        display:'flex',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        marginTop:50
    },
    BtnText:{
        textAlign:'center',
        fontSize: 16,
        color:'#ffffff'
    },
    container: {
    },
    item:{
        backgroundColor:'#ffffff',
        marginTop: 10,
    },
    list:{
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        height:55,
        alignItems: 'center',
        marginLeft: 20,
        paddingRight: 20,
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1,
    },
    textRight:{
        textAlign:'right'
    },
    input:{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
    }
});

//make this component available to the app
export default Jisuan;

