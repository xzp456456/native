
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// create a component
class Line extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <View style={styles.list}>
                        <Text>公司</Text>
                        <View style={styles.input}>
                            <Text>菲律宾房产资讯公司</Text>
                        </View>
                    </View>
                    <View style={styles.listWt}>
                        <Text style={styles.time}>办公时间</Text>
                        <View style={styles.inputWt}>
                            <Text>上午九时至下午六时（星期一至五）星期日及公众假期休息</Text>
                        </View>
                    </View>
                    <View style={styles.list}>
                        <Text>客服电话</Text>
                        <View style={styles.input}>
                            <Text>39043021</Text>
                        </View>
                    </View>
                    <View style={styles.list}>
                        <Text>传真</Text>
                        <View style={styles.input}>
                            <Text>(256)3020-8775</Text>
                        </View>
                    </View>
                    <View style={styles.list}>
                        <Text>年限(年)</Text>
                        <View style={styles.input}>
                            <Text>(256)3020-8775</Text>
                        </View>
                    </View>
                    <View style={styles.list}>
                        <Text style={styles.bold}>电邮</Text>
                        <View style={styles.input}>
                            <Text>fangchan@flb.com</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    Btn: {
        width: 420,
        backgroundColor: '#FF5555',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50
    },
    BtnText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#ffffff'
    },
    time: {
        marginTop: 15
    },
    item: {
        backgroundColor: '#ffffff',
        marginTop: 10,
    },
    inputWt: {
        display: 'flex',
        flexDirection: 'row',
        width: 200,
        marginTop: 15
    },
    listWt: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 75,
        marginLeft: 20,
        paddingRight: 20,
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1,
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 55,
        alignItems: 'center',
        marginLeft: 20,
        paddingRight: 20,
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1,
    },
    textRight: {
        textAlign: 'right'
    },
    input: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
});

//make this component available to the app
export default Line;

