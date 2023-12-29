import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import axios from 'axios'
import useAuth from '../context/useAuth'
const useImagePicker = () => {
    const [image, setImage] = useState([])
    const [imageCount, setImageCount] = useState(null)
    const {
        ip
    } = useAuth()
    const handleYesPress = (id) => {
        deleteImage(id)
    };
    const getImageCount = () => {
        axios.get(`http://${ip}:8080/imageCount`).then(response => {
            setImageCount(response.data.imageCount)
        })
    }
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
        handleAlert,
        getImageCount,
        imageCount
    }


}

export default useImagePicker