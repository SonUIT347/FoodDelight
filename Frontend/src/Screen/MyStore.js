import React, { useState, useEffect } from 'react';
// import { View, Image, Button, StyleSheet } from 'react-native';
import { View, StyleSheet, Text, Image, Button, TouchableOpacity, TextInput, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Home_Address from '../Component/Home_Address';
import useAuth from '../context/useAuth';
import axios from "axios";
import { ScrollView } from 'react-native-gesture-handler';

const uri_0 = "https://www.sjfpavingandlandscaping.com.au/thumbnailsmall/_gbImage.png"

const MyStore = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [province, setProvince] = useState('')
  const [nameCollaborator, setNameCollaborator] = useState('')
  const [sdt, setSdt] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [edit, setEdit] = useState(true)

  const [deny, setDeny] = useState(false)
  const [pending, setPending] = useState(false)
  

  const {
    ip, 
    username
  } = useAuth()

  useEffect(() => {
    getDataCollaborator()
  }, []);

  const getDataCollaborator = async () => {
    try {
      // /Collaborator/:username
        const response = await axios.get(`http://${ip}:8080/CollaboratorDeny/${username}`);
        const dt = response.data;
        console.log(dt)
        if(dt.length != 0)
          setDeny(true)
    } catch (error) {
        console.error('Error fetching data userId', error.message);
    }
    try {
      // /Collaborator/:username
        const response = await axios.get(`http://${ip}:8080/CollaboratorPending/${username}`);
        const dt = response.data;
        console.log(dt)
        if(dt.length != 0)
          setPending(true)
    } catch (error) {
      console.error('Error fetching data userId', error.message);
    }
  };

  const handleValueProvince = (valueProvince) => {
    setProvince(valueProvince)
  }

  const handleNameCollaborator = (text) => {
    setNameCollaborator(text)
  }

  const handleAddress = (text) => {
    setAddress(text)
  }

  const handleSdt = (text) => {
    if (/^\d+$/.test(text) || text === '') {
      setSdt(text);
    }
  };

  const handleEmail = (text) => {
    setEmail(text)
  }

  const HandleRequest = async () => {
    if (province == '' || nameCollaborator == '' || sdt == '' || address == '' || email == '') {
      Alert.alert(
        'Thông báo',
        'Vui lòng nhập đủ thông tin',
        [
          {
            text: 'OK',
            style: 'cancel',
          }
        ],
        { cancelable: false }
      );
    }
    else {
      let maKH
      try {
        const response = await axios.get(`http://${ip}:8080/getUserId/${username}`);
        const dt = response.data;
        console.log(dt)
        maKH = (dt[0].IdUser)
      } catch (error) {
        console.error('Error fetching data userId', error.message);
      }

      try {
        const response = await fetch(`http://${ip}:8080/InsertCollaborator`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ maKH, nameCollaborator, address, province, sdt, email }),
        });
        if (response.status === 200) {
          const responseData = await response.json(); // Parse the response as JSON
          if (responseData.success) {
            Alert.alert(
              'Thông báo',
              'Gửi yêu cầu thành công',
              [
                {
                  text: 'OK',
                  style: 'cancel',
                }
              ],
              { cancelable: false }
            );
            setEdit(false)
          } else {
            console.log('Insert failed');
            // Xử lý khi insert không thành công
          }
        } else {
          // Authentication failed
          Alert.alert(
            'Thông báo',
            'Gửi yêu cầu không thành công',
            [
              {
                text: 'OK',
                style: 'cancel',
              }
            ],
            { cancelable: false }
          );
          console.log('insert failed');
        }
      } catch (error) {
        console.log('insert error:', error);
      }
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView style={{ height: 300 }}>
        <View
          style={{
            flexDirection: "row", justifyContent: "space-between", height: 85,
            alignItems: 'center', width: '100%', position: 'relative', alignSelf: 'flex-start'
          }}
        >
          {/* <AntDesign
            name="arrowleft"
            size={30} color="black"
            style={{
              backgroundColor: 'green', borderRadius: 20, width: 35,
              height: 35, textAlign: "center", textAlignVertical: 'center', position: "absolute"
            }}
          /> */}
          <View style={{ width: '100%' }}>
            {/* <Text style={{fontSize: 20, fontWeight: 500, textAlign: 'center', width: '100%'}}>{header}</Text> */}
            <Text style={{ fontSize: 20, fontWeight: 500, textAlign: 'center', width: '100%' }}>Yêu cầu tạo của hàng</Text>
          </View>

        </View>

        {edit ? (
          <>
            <View
              style={{
                width: '100%', borderWidth: 1, position: 'relative',
                padding: 20, borderRadius: 10, borderColor: '#45BC1B', marginVertical: 20
              }}
            >
              <Text
                style={{
                  marginTop: -13, fontSize: 13, backgroundColor: 'white', position: 'absolute', marginLeft: 20,
                  paddingHorizontal: 10, fontWeight: 500, color: '#45BC1B'
                }}
              >
                Tên của hàng
              </Text>
              <TextInput
                style={{}}
                // multiline={true}
                value={nameCollaborator}
                onChangeText={handleNameCollaborator}
                // onChangeText={handleTextChange_Sdt}
                placeholder='Nhập tên cửa hàng'
                numberOfLines={1}
              />
            </View>



            <Text style={{ fontWeight: '500', width: '100%' }}>Thông Tin</Text>

            <View
              style={{
                width: '100%', borderWidth: 1, position: 'relative',
                padding: 20, borderRadius: 10, borderColor: '#45BC1B', marginVertical: 20
              }}
            >
              <Text
                style={{
                  marginTop: -13, fontSize: 13, backgroundColor: 'white', position: 'absolute', marginLeft: 20,
                  paddingHorizontal: 10, fontWeight: 500, color: '#45BC1B'
                }}
              >
                Địa chỉ
              </Text>
              <TextInput
                style={{}}
                // multiline={true}
                value={address}
                onChangeText={handleAddress}
                placeholder='Nhập địa chỉ'
                numberOfLines={1}
              />
            </View>

            <View
              style={{
                width: '100%', borderWidth: 1, position: 'relative',
                padding: 0, borderRadius: 10, borderColor: '#45BC1B', marginVertical: 20
              }}
            >
              <Text
                style={{
                  marginTop: -13, fontSize: 13, backgroundColor: 'white', position: 'absolute', marginLeft: 20,
                  paddingHorizontal: 10, fontWeight: 500, color: '#45BC1B'
                }}
              >
                Tỉnh
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', alignSelf: "flex-end" }}>
                <Home_Address valueProvince={handleValueProvince} />
              </View>
            </View>

            <View
              style={{
                width: '100%', borderWidth: 1, position: 'relative',
                padding: 20, borderRadius: 10, borderColor: '#45BC1B', marginVertical: 20
              }}
            >
              <Text
                style={{
                  marginTop: -13, fontSize: 13, backgroundColor: 'white', position: 'absolute', marginLeft: 20,
                  paddingHorizontal: 10, fontWeight: 500, color: '#45BC1B'
                }}
              >
                Số điện thoại
              </Text>
              <TextInput
                style={{}}
                // multiline={true}
                keyboardType="numeric"
                value={sdt}
                onChangeText={handleSdt}
                placeholder='Nhập sdt'
                numberOfLines={1}
              />
            </View>

            <View
              style={{
                width: '100%', borderWidth: 1, position: 'relative',
                padding: 20, borderRadius: 10, borderColor: '#45BC1B', marginVertical: 20
              }}
            >
              <Text
                style={{
                  marginTop: -13, fontSize: 13, backgroundColor: 'white', position: 'absolute', marginLeft: 20,
                  paddingHorizontal: 10, fontWeight: 500, color: '#45BC1B'
                }}
              >
                Email
              </Text>
              <TextInput
                style={{}}
                // multiline={true}
                value={email}
                onChangeText={handleEmail}
                placeholder='Nhập email'
                numberOfLines={1}
              />
            </View>
            <View style={{ justifyContent: 'flex-end', width: '100%', alignItems: 'center', bottom: 0 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#45BC1B', width: '100%', padding: 20,
                  marginVertical: 20, borderRadius: 15
                }}
                onPress={() => HandleRequest()}
              >
                <Text style={styles.txtButton}>Gửi yêu cầu tạo cửa hàng</Text>
              </TouchableOpacity>
            </View>

            {/* <View 
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
                    value={"0917651871"}
                    // onChangeText={handleTextChange_Sdt}
                    placeholder='Nhập sdt'
                    numberOfLines={1}
                />
            </View> */}

            <View style={{flex: 1, justifyContent: 'flex-end', width: '100%', alignItems: 'center', position: 'absolute', bottom: 0}}>
                <TouchableOpacity 
                    style={{backgroundColor: '#45BC1B', width: '100%', padding: 20, 
                    marginVertical: 20, borderRadius: 15}}
                    onPress={()=>HandleRequest()}
                >
                    <Text style={styles.txtButton}>Gửi yêu cầu tạo cửa hàng</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity 
                    style={{backgroundColor: 'red', width: '100%', padding: 20, marginVertical: 10, 
                    marginBottom: 20, borderRadius: 15}}
                >
                    <Text style={styles.txtButton}>Xóa tài khoản</Text>
                </TouchableOpacity> */}
            </View>
          </>):(
            
          <View style = {{justifyContent: 'center', flex: 1}}>
            { deny ? (
                <>
                    <Text style={{fontSize: 18, textAlign: 'center'}}>Tài khoản này đã đăng ký cửa hàng</Text>
                    <Text style={{fontSize: 18, textAlign: 'center'}}>Vui lòng chờ duyệt </Text>
                </>
                  
              ) : (
                <>
                    <Text style={{fontSize: 18, textAlign: 'center'}}>Bạn đang là cộng tác viên</Text>
                    <Text style={{fontSize: 18, textAlign: 'center'}}>Vui lòng chờ duyệt </Text>
                </>
              )
            }
            
          </View>)
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Platform.OS === 'android' ? 30 : 0,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginVertical: 10,
  },
  txtButton: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default MyStore;
