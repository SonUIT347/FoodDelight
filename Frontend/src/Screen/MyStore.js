import React, { useState, useEffect } from 'react';
// import { View, Image, Button, StyleSheet } from 'react-native';
import { View, StyleSheet, Text, Image, Button, TouchableOpacity, TextInput} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';


const uri_0 = "https://www.sjfpavingandlandscaping.com.au/thumbnailsmall/_gbImage.png"

const MyStore = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    (async () => {
      // Kiểm tra quyền truy cập thư viện ảnh
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Xin vui lòng cấp quyền truy cập thư viện ảnh để sử dụng tính năng này.');
      }
    })();
  }, []);

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });

      if (!result.canceled) {
        // console.log(result.assets[0].uri)
        setSelectedImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Lỗi khi chọn ảnh: ', error);
    }
  };

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
      {console.log(selectedImage)}
        <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%', alignItems: 'center'}}>
            {selectedImage!=null ? (<Image source={{ uri: selectedImage }} style={styles.image} />) : (<Image source={require('../../../assets/No_Image.png')} style={styles.image}/>)}
            <TouchableOpacity style={{backgroundColor: '#45BC1B', padding: 20, borderRadius: 10}} onPress={pickImage}>
                <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Chọn ảnh</Text>
            </TouchableOpacity>
        </View>

        <View 
            style={{width: '100%', borderWidth: 1, position: 'relative', 
            padding: 20, borderRadius: 10, borderColor: '#45BC1B', marginVertical: 20}}
        >
            <Text 
                style={{marginTop: -13, fontSize: 13, backgroundColor: 'white', position: 'absolute', marginLeft: 20,
                paddingHorizontal: 10, fontWeight: 500, color: '#45BC1B'}}
            >
                Tên của hàng
            </Text>
            <TextInput
                style={{}}
                // multiline={true}
                value={"Cái tiệm cơm gà"}
                // onChangeText={handleTextChange_Sdt}
                placeholder='Nhập sdt'
                numberOfLines={1}
            />
        </View>
        
        <Text style={{fontWeight: '500', width: '100%'}}>Thông Tin</Text>

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
                value={"0917651871"}
                // onChangeText={handleTextChange_Sdt}
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
                value={"thadsfadsf@gmail.com"}
                // onChangeText={handleTextChange_Sdt}
                placeholder='Nhập sdt'
                numberOfLines={1}
            />
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
      
      {/* <Image source={{ uri: selectedImage }} style={styles.image} /> */}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    marginTop: Platform.OS === 'android' ? 30 : 0,
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
