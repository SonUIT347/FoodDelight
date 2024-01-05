import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Name = 'Nguyễn Ngọc Thắng'

const Profile=({navigation}) => {
    const logOut = async () => {
        navigation.navigate('Login')
        await AsyncStorage.removeItem('IdUser')
        await AsyncStorage.removeItem('role')
    }
  return (
    <View style={styles.container}>
        <View 
            style={{flexDirection: "row", justifyContent: "space-between", height: 85,
            alignItems: 'center', width: '100%', position: 'relative', alignSelf: 'flex-start'}}
        >
            <AntDesign 
                name="arrowleft" 
                size={30} color="black" 
                style={{backgroundColor: 'green', borderRadius: 20, width: 35,
                height: 35, textAlign: "center", textAlignVertical: 'center', position: "absolute"}}
            />
            <View style={{width: '100%'}}>
                {/* <Text style={{fontSize: 20, fontWeight: 500, textAlign: 'center', width: '100%'}}>{header}</Text> */}
                <Text style={{fontSize: 20, fontWeight: 500, textAlign: 'center', width: '100%'}}>Thông tin tài khoản</Text>
            </View>

        </View>

        <TouchableOpacity style={{marginVertical: 20}}>
            <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', backgroundColor: '#F5FBF3', borderRadius: 15}}>
                <View style={{flex: 1, padding: 10, paddingHorizontal: 20}}>
                    <Text style={{color: '#6B6D7B', paddingVertical: 0}}>Thông tin cá nhân</Text>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>{Name}</Text>


                </View>
                <AntDesign name="right" size={24} color="#6AC949" style={{paddingRight: 10}}/>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{marginBottom: 10}} onPress={() => navigation.navigate('Cart')}>
            <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', backgroundColor: '#F5FBF3', borderRadius: 15}}>
                <View style={{flex: 1, padding: 10, paddingHorizontal: 20}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Giỏ hàng</Text>
                </View>
                <AntDesign name="right" size={24} color="#6AC949" style={{paddingRight: 10}}/>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{marginVertical: 10}} onPress={() => navigation.navigate('Address')} >
            <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', backgroundColor: '#F5FBF3', borderRadius: 15}}>
                <View style={{flex: 1, padding: 10, paddingHorizontal: 20}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Địa chỉ</Text>
                </View>
                <AntDesign name="right" size={24} color="#6AC949" style={{paddingRight: 10}}/>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{marginVertical: 10}} onPress={() => navigation.navigate('Store')} >
            <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', backgroundColor: '#F5FBF3', borderRadius: 15}}>
                <View style={{flex: 1, padding: 10, paddingHorizontal: 20}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Gửi yêu cầu tạo của hàng</Text>
                </View>
                <AntDesign name="right" size={24} color="#6AC949" style={{paddingRight: 10}}/>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{marginVertical: 10}} onPress={() => navigation.navigate('Bill')}>
            <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', backgroundColor: '#F5FBF3', borderRadius: 15}}>
                <View style={{flex: 1, padding: 10, paddingHorizontal: 20}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Lịch sử mua hàng</Text>
                </View>
                <AntDesign name="right" size={24} color="#6AC949" style={{paddingRight: 10}}/>
            </View>
        </TouchableOpacity>

        <View style={{flex: 1, justifyContent: 'flex-end', width: '100%', alignItems: 'center'}}>
            <TouchableOpacity 
                style={{backgroundColor: '#45BC1B', width: '100%', padding: 20, 
                marginVertical: 10, borderRadius: 15}}
            >
                <Text style={styles.txtButton} onPress={logOut} >Đăng xuất</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={{backgroundColor: 'red', width: '100%', padding: 20, marginVertical: 10, 
                marginBottom: 20, borderRadius: 15}}
            >
                <Text style={styles.txtButton}>Xóa tài khoản</Text>
            </TouchableOpacity>
        </View>


    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 30 : 0,
        marginHorizontal: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    txtButton: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    }

});

export default Profile