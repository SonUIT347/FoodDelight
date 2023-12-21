import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const Register = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.Logo}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#4ECB71' }}>Food Delight</Text>
                <Text style={{ fontSize: 20, color: '#4ECB71' }}>Đăng kí tài khoản</Text>
            </View>
            <View style={styles.Username}>
                <AntDesign name="user" size={24} color="black" />
                <TextInput
                    placeholder='Enter username'
                    style={styles.username_input}
                />
            </View>
            <View style={styles.Username}>
                <Feather name="mail" size={24} color="black" />
                <TextInput
                    placeholder='Enter email'
                    style={styles.username_input}
                />
                {/* 20521850 */}
            </View>
            <View style={styles.Username}>
                <AntDesign name="lock" size={24} color="black" />
                <TextInput
                    placeholder='Enter password'
                    style={styles.username_input}
                />
            </View>
            <View style={styles.Username}>
                <AntDesign name="lock" size={24} color="black" />
                <TextInput
                    placeholder='Confirm password'
                    style={styles.username_input}
                />
            </View>

            <View style={styles.Login}>
                <TouchableOpacity
                // 20521850
                >
                    <Text style={styles.Login_text}>CREATE</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.haveaccount}>
                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ color: 'blue', fontWeight: 'bold' }}>Login now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Logo: {
        height: 100,
        width: 300,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    },
    LogoImage: {
        height: 100,
        width: 100,
        borderRadius: 100
    },
    Username: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 300,
        borderWidth: 1,
        margin: 10,
        height: 50,
        borderRadius: 5
    },
    username_input: {
        width: 250,
        height: 30,
    },
    Login: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        borderWidth: 1,
        margin: 5,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#4ECB71'
    },
    welcome: {
        marginTop: 5,
        fontSize: 20,
        fontWeight: 'bold'
    },
    Login_text: {
        color: 'white',
        fontWeight: 'bold'
    },
    // 20521850
    haveaccount: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        margin: 5,
        height: 20,
    }
})
export default Register