import React, {useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// const Name = 'Nguyễn Ngọc Thắng'

const Personal=() => {
    const [name, setName] = useState('Nguyen Van A')
    const [sdt, setSdt] = useState('0917285735')
    const [email, setEmail] = useState('nguyenvana@gmail.com')
    const [password, setPassword] = useState('************')

    const handleTextChange_Email=(text)=>{
        setEmail(text)
    }

    const handleTextChange_Name=(text)=>{
        setName(text)
    }

    const handleTextChange_Sdt=(text)=>{
        setSdt(text)
    }

    const handleTextChange_Password=(text)=>{
        setEmail(text)
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
                <Text style={{fontSize: 20, fontWeight: 500, textAlign: 'center', width: '100%'}}>Thông tin cá nhân</Text>
            </View>

        </View>

        <View 
            style={{width: '100%', borderWidth: 1, position: 'relative', 
            padding: 20, borderRadius: 10, borderColor: '#45BC1B', marginVertical: 20}}
        >
            <Text 
                style={{marginTop: -13, fontSize: 13, backgroundColor: 'white', position: 'absolute', marginLeft: 20,
                paddingHorizontal: 10, fontWeight: 500, color: '#45BC1B'}}
            >
                Họ & Tên
            </Text>
            <TextInput
                style={{}}
                // multiline={true}
                value={name}
                onChangeText={handleTextChange_Name}
                placeholder='Nhập họ & tên'
                numberOfLines={1}
            />
            {/* <Text>Nguyễn Ngọc Thắng</Text> */}
        </View>

        <View 
            style={{width: '100%', borderWidth: 1, position: 'relative', 
            padding: 20, borderRadius: 10, borderColor: '#45BC1B', marginVertical: 20}}
        >
            <Text 
                style={{marginTop: -13, fontSize: 13, backgroundColor: 'white', position: 'absolute', marginLeft: 20,
                paddingHorizontal: 10, fontWeight: 500, color: '#45BC1B'}}
            >
                Số điện thoại
            </Text>
            <TextInput
                style={{}}
                // multiline={true}
                value={sdt}
                onChangeText={handleTextChange_Sdt}
                placeholder='Nhập sdt'
                numberOfLines={1}
            />
        </View>

        <View 
            style={{width: '100%', borderWidth: 1, position: 'relative', 
            padding: 20, borderRadius: 10, borderColor: '#45BC1B', marginVertical: 20}}
        >
            <Text 
                style={{marginTop: -13, fontSize: 13, backgroundColor: 'white', position: 'absolute', marginLeft: 20,
                paddingHorizontal: 10, fontWeight: 500, color: '#45BC1B'}}
            >
                Email
            </Text>
            <TextInput
                style={{}}
                // multiline={true}
                value={email}
                onChangeText={handleTextChange_Email}
                placeholder='Nhập email'
                numberOfLines={1}
            />
        </View>

        <View 
            style={{width: '100%', borderWidth: 1, position: 'relative', 
            padding: 20, borderRadius: 10, borderColor: '#45BC1B', marginVertical: 20}}
        >
            <Text 
                style={{marginTop: -13, fontSize: 13, backgroundColor: 'white', position: 'absolute', marginLeft: 20,
                paddingHorizontal: 10, fontWeight: 500, color: '#45BC1B'}}
            >
                Password
            </Text>
            <TextInput
                style={{}}
                // multiline={true}
                value={password}
                onChangeText={handleTextChange_Password}
                placeholder='Nhập password'
                numberOfLines={1}
            />
        </View>

        <View style={{flex: 1, justifyContent: 'flex-end', width: '100%', alignItems: 'center', position: 'absolute', bottom: 0}}>
            <TouchableOpacity 
                style={{backgroundColor: '#45BC1B', width: '100%', padding: 20, 
                marginVertical: 20, borderRadius: 15}}
            >
                <Text style={styles.txtButton}>Lưu</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity 
                style={{backgroundColor: 'red', width: '100%', padding: 20, marginVertical: 10, 
                marginBottom: 20, borderRadius: 15}}
            >
                <Text style={styles.txtButton}>Xóa tài khoản</Text>
            </TouchableOpacity> */}
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

export default Personal