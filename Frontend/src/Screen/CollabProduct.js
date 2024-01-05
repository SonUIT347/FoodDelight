import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import Line from '../Component/Line';
import Dropdown from '../Component/Dropdown';
import useImagePicker from '../Component/useImagePicker';
import ImageShow from '../Component/ImageShow';
import SubmitBtn from '../Component/SubmitBtn';
import axios from 'axios';
import useAuth from '../context/useAuth';
import { storage } from '../firebase/firebaseConfig';
import { getDownloadURL } from "firebase/storage";
import { ref, uploadBytesResumable } from 'firebase/storage';
// import AsyncStorage from '@react-native-async-storage/async-storage';
const CollabProduct = ({ navigation }) => {
    const {
        ip,
        getFoodCount,
        foodCount
    } = useAuth()
    const {
        pickImage,
        image,
        setImage,
        handleAlert,
        getImageCount,
        imageCount
    } = useImagePicker()
    // console.log(image)
    const [selected, setSelected] = useState([]);
    const [imageUrl, setImageUrl] = useState([])
    const [nameFood, setNameFood] = useState('')
    const [desFood, setDesFood] = useState('')
    const [priceFood, setPriceFood] = useState(0)
    const [stock, setStock] = useState(0)

    const uploadImage = async () => {
        const downloadUrls = await Promise.all(
            image.map(async (imageUrl) => {
                const response = await fetch(imageUrl);
                const blob = await response.blob();
                const filename = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
                const storageRef = ref(storage, 'images/' + filename);
                const uploadTask = uploadBytesResumable(storageRef, blob);

                return new Promise((resolve, reject) => {
                    uploadTask.on(
                        'state_changed',
                        (snapshot) => {
                            // Progress tracking
                        },
                        (error) => {
                            reject(error);
                        },
                        () => {
                            getDownloadURL(uploadTask.snapshot.ref)
                                .then((downloadURL) => resolve(downloadURL))
                                .catch((error) => reject(error));
                        }
                    );
                });
            })
        );

        return downloadUrls;
    };

    const trangthai = 'pending'
    const macollaborator = 'MC0001' //AsyncStorage.setItem('IdUser', userID); 
    const luotban = 0
    getFoodCount()
    const mama = 'MA00' + (foodCount + 1)
    getImageCount()
    const maAnh = 'AH' + (imageCount + 1)
    const addFood = async () => {
        try {
            const imageUrls = await uploadImage();
            const response = await axios.post(`http://${ip}:8080/createfood`, {
                mama,
                macollaborator,
                nameFood,
                priceFood,
                luotban,
                trangthai,
                stock,
                selected,
                imageUrls,
                maAnh,
                desFood
            });
            // navigation.navigate('Drawer');
            setNameFood('')
            setDesFood('')
            setPriceFood(0)
            setStock(0)
            setSelected([])
            setImage([])
        } catch (err) {
            console.log('An error to add food: ', err)
        }
    }
    const submit = () => {
        if (nameFood !== '' && desFood !== '' && priceFood != 0 && stock != 0 && selected !== null) {
            addFood()
        } else {
            alert('Vui lòng nhập đầy đủ thông tin')
        }

    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            {/* {console.log(post)} */}
            <ScrollView >
                <Text style={styles.imageText}>Hình ảnh sản phẩm</Text>
                <View style={styles.imagePicker}>
                    <TouchableOpacity
                        onPress={() => pickImage()}
                        style={styles.addImage} >
                        <Entypo
                            name="image"
                            size={40}
                            color="#4ECB71"
                        />
                        <Text style={styles.addImage_text} >Thêm hình ảnh sản phẩm</Text>
                    </TouchableOpacity>
                    <View style={styles.imageList}>
                        {image !== '' ? (image.map((image, index) => (
                            <ImageShow id={index} image={image} handleAlert={handleAlert} />
                        ))) : null}
                    </View>

                </View>

                <View style={styles.productInfo}>
                    <View style={styles.productName}>
                        <Text style={styles.productName_title}>Tên sản phẩm</Text>
                        <TextInput
                            multiline
                            maxLength={100}
                            placeholder='Ví dụ: Cơm gà chiên đặc biệt'
                            onChangeText={(text) => setNameFood(text)}
                            style={{
                                marginLeft: 10,
                                height: 'auto',
                                width: '95%',
                                fontSize: 18
                            }}
                            value={nameFood}
                        />
                        <Line />
                    </View>
                    <View style={styles.productName}>
                        <Text style={styles.productName_title}>Mô tả sản phẩm</Text>
                        <TextInput
                            multiline
                            maxLength={500}
                            onChangeText={(text) => setDesFood(text)}
                            placeholder='Ví dụ: Cơm gà chiên đặc biệt'
                            style={{
                                marginLeft: 10,
                                height: 'auto',
                                width: '95%',
                                fontSize: 18
                            }}
                            value={desFood}
                        />
                        <Line />
                    </View>
                    <View>
                        <Text style={styles.productName_title}>
                            Hạng mục
                        </Text>
                        <Dropdown
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </View>
                    <View style={styles.productName}>
                        <Text style={styles.productName_title}>Giá bán VND</Text>
                        <TextInput
                            multiline
                            maxLength={12}
                            onChangeText={(text) => setPriceFood(text)}
                            placeholder='Ví dụ: 350000'
                            style={{
                                marginLeft: 10,
                                height: 'auto',
                                width: '95%',
                                fontSize: 18
                            }}
                            value={priceFood}
                        />
                        <Line />
                    </View>
                    <View style={styles.productName}>
                        <Text style={styles.productName_title}>Số lượng</Text>
                        <TextInput
                            multiline
                            maxLength={12}
                            onChangeText={(text) => setStock(text)}
                            placeholder='Ví dụ: 100'
                            style={{
                                marginLeft: 10,
                                height: 'auto',
                                width: '95%',
                                fontSize: 18
                            }}
                            value={stock}
                        />
                        <Line />
                    </View>
                </View>
                <View >
                    <SubmitBtn text={'Gửi yêu cầu xét duyệt'} press={() => submit()} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
    addImage: {
        flexDirection: 'row',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',

    },
    addImage_text: {
        marginLeft: 20,
        fontSize: 20,
        color: '#6B6D7B'
    },
    imageText: {
        margin: 10,
        fontSize: 20
    },
    productName_title: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 20
    },
    imagePicker: {
        borderStyle: 'dashed',
        borderWidth: 2,
        marginLeft: 10,
        marginRight: 10,
        borderColor: '#000000',
        width: "95%",
        height: 'auto'
    },
    imageList: {
        flexDirection: 'row',
        height: 'auto',
        width: '100%',
        flexWrap: 'wrap',
        marginLeft: 25
    },


})
export default CollabProduct