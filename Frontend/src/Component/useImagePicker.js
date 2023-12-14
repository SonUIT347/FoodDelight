import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
const useImagePicker = () => {
    const [image, setImage] = useState([])
    const handleYesPress = (id) => {
        deleteImage(id)
    };

    const handleNoPress = () => {
    };
    const pickImage = async () => {

        if (image.length == 6) {
            Alert.alert('Chỉ được chọn 6 ảnh')
        } else {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                allowsMultipleSelection: true,
                selectionLimit: 5,
                aspect: [4, 3],
                quality: 1,
            });
            console.log(result);
            if (!result.canceled) {
                const img = result.assets[0].uri
                setImage([...image, img]);
            }
        }

    };
    const handleAlert = (id) => {
        Alert.alert(
            'Xác nhận',
            'Bạn có muốn xóa ảnh?',
            [
                { text: 'No', onPress: handleNoPress, style: 'cancel' },
                { text: 'Yes', onPress: handleYesPress },
            ],
            { cancelable: false }
        );
    }
    const deleteImage = (id) => {
        image.splice(id, 1)
        setImage([...image])
    }
    return {
        pickImage,
        image,
        setImage,
        deleteImage,
        handleAlert
    }


}

export default useImagePicker