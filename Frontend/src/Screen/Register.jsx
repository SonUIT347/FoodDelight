import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import useAuth from '../context/useAuth';
import { IP } from '../../../Backend/IPAddress';
const Register = ({ navigation }) => {
    const [confirmPass, setConfirmPass] = useState('')
    const {
        username,
        setUsername,
        password,
        setPassword,
        getUserCount,
        userCount,
        findMissingValue,
        ip
    } = useAuth()
    const [arrayUserId, setArrayUserId] = useState([])
    const [id, setId] = useState(null)
    useEffect(() => {
        getUserId()
    }, [])
    const getUserId = async () => {
        try {
            const response = await axios.get(`http://${ip}:8080/getUserId`);
            const modifiedUserIds = response.data.map(userId => parseInt(userId.slice(2), 10));

            setArrayUserId(modifiedUserIds);

            console.log(modifiedUserIds);
            setId(findMissingValue(modifiedUserIds))
        } catch (error) {
            console.error('Error fetching user IDs:', error.message);
        }
    };
    const role = 0
    const handleRegister = async () => {
        if (username == '' || password == '' || confirmPass == '') {
            alert('Hãy điền đầy đủ thông tin');
        } else if (password !== confirmPass) {
            alert('Mật khẩu không trùng khớp');
        } else {
            await getUserCount()
            if (id === null) {
                IdUser = 'FD0' + (userCount + 1)
            } else {
                IdUser = 'FD0' + id
            }
            try {
                const response = await axios.post(`http://${ip}:8080/register`, {
                    username,
                    password,
                    role,
                    IdUser
                });
                console.log(response.data)
                navigation.navigate('Drawer');
                setUsername('')
                setPassword('')
            } catch (err) {
                console.log('An error to register: ', err)
            }
            const Adress = ''
            const status = ''
            try {
                const res = await axios.post(`http://${ip}:8080/createcus`, {
                    IdUser,
                    username,
                    Adress,
                    status
                });
                console.log(res.data)
            } catch (err) {
                console.log('An error to create customer: ', err)
            }
        }

    }
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
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
            </View>
            {/* <View style={styles.Username}>
                <Feather name="mail" size={24} color="black" />
                <TextInput
                    placeholder='Enter email'
                    style={styles.username_input}
                />
            </View> */}
            <View style={styles.Username}>
                <AntDesign name="lock" size={24} color="black" />
                <TextInput
                    placeholder='Enter password'
                    style={styles.username_input}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <View style={styles.Username}>
                <AntDesign name="lock" size={24} color="black" />
                <TextInput
                    placeholder='Confirm password'
                    style={styles.username_input}
                    value={confirmPass}
                    secureTextEntry={true}
                    onChangeText={(text) => setConfirmPass(text)}
                />
            </View>

            <View style={styles.Login}>
                <TouchableOpacity onPress={handleRegister}
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