import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleAccount = () => {
        // Implement your logic for handling login here
        console.log('Login pressed');
    };
    const loginUser = async () => {
        try {
            const response = await fetch('http://192.168.1.6:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.status === 200) {
                const responseData = await response.json(); // Parse the response as JSON
                const token = responseData.token;

                // Save the token to AsyncStorage
                await AsyncStorage.setItem('token', token);
                const tk = AsyncStorage.getItem('token')
                console.log(tk)
                // Navigate to the 'Drawer' screen or any other screen
                navigation.navigate('Drawer');
                console.log('Login success');
            } else {
                // Authentication failed
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Login error:', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.Logo}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#4ECB71' }}>Food Delight</Text>
                <Text style={{ fontSize: 20, color: '#4ECB71' }}>Đăng nhập</Text>
            </View>
            <View style={styles.Username}>
                <Feather name="mail" size={24} color="black" />
                <TextInput
                    placeholder="Enter username"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                    style={styles.username_input}
                />
            </View>
            <View style={styles.Username}>
                <AntDesign name="lock" size={24} color="black" />
                <TextInput
                    placeholder="Enter password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    style={styles.username_input}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.fogotpass}>
                <Text style={styles.fogotpass_text}>Forgot password</Text>
            </View>
            <View style={styles.Login}>
                <TouchableOpacity onPress={loginUser}>
                    <Text style={styles.Login_text}>LOG IN</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.haveaccount}>
                <Text>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={{ color: 'blue', fontWeight: 'bold' }}>Sign up here</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Logo: {
        height: 100,
        width: 200,
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
        // 205218520
        borderRadius: 5
    },
    username_input: {
        width: 250,
        height: 30,
    },
    fogotpass: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: 300,
        margin: 5,
        height: 10,
    },
    fogotpass_text: {
        color: '#fc03b6',
        height: 20
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
        // 20521850
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
    orlogin: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    orlogin_text: {
        fontWeight: 'bold'
    },
    orlogin_with: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100
    },
    // 20521850
    login_fb: {
        height: 50,
        width: 50,
        borderRadius: 100,
        margin: 5
    },
    haveaccount: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        margin: 5,
        height: 20,
    }
})
export default Login