import React, { useState, useEffect } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const MyImagePicker = () => {
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
      {/* {console.log(selectedImage)} */}
      {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}

      {/* <Image source={{ uri: selectedImage }} style={styles.image} /> */}
      <Button title="Chọn ảnh" onPress={pickImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginVertical: 10,
  },
});

export default MyImagePicker;
