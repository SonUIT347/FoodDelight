import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Name = 'Nguyễn Ngọc Thắng'

const Personal=() => {
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
            <Text>Nguyễn Ngọc Thắng</Text>
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
            <Text>0913768241</Text>
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
            <Text>20521XXX@gm.uit.edu.vn</Text>
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
});

export default Personal