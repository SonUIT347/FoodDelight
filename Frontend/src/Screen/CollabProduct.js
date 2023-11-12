import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import Line from '../Component/Line';
import Dropdown from '../Component/Dropdown';
import useImagePicker from '../Component/useImagePicker';
import ImageShow from '../Component/ImageShow';
import SubmitBtn from '../Component/SubmitBtn';
const CollabProduct = () => {
    // const [image, setImage] = useState(null)
    const [post, setPost] = useState([{
        image: [],
        nameProduct: '',
        desProduct: '',
        priceProduct: '',
        categrory: [],
        stock: ''

    }])
    const submit = () => {
        
    }
    const {
        pickImage,
        image,
        setImage,
        handleAlert } = useImagePicker()
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
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
                            style={{
                                marginLeft: 10,
                                height: 'auto',
                                width: '95%',
                                fontSize: 18
                            }}
                        />
                        <Line />
                    </View>
                    <View style={styles.productName}>
                        <Text style={styles.productName_title}>Mô tả sản phẩm</Text>
                        <TextInput
                            multiline
                            maxLength={500}
                            placeholder='Ví dụ: Cơm gà chiên đặc biệt'
                            style={{
                                marginLeft: 10,
                                height: 'auto',
                                width: '95%',
                                fontSize: 18
                            }}
                        />
                        <Line />
                    </View>
                    <View>
                        <Text style={styles.productName_title}>
                            Hạng mục
                        </Text>
                        <Dropdown />
                    </View>
                    <View style={styles.productName}>
                        <Text style={styles.productName_title}>Giá bán VND</Text>
                        <TextInput
                            multiline
                            maxLength={12}
                            placeholder='Ví dụ: 350000'
                            style={{
                                marginLeft: 10,
                                height: 'auto',
                                width: '95%',
                                fontSize: 18
                            }}
                        />
                        <Line />
                    </View>
                    <View style={styles.productName}>
                        <Text style={styles.productName_title}>Số lượng</Text>
                        <TextInput
                            multiline
                            maxLength={12}
                            placeholder='Ví dụ: 100'
                            style={{
                                marginLeft: 10,
                                height: 'auto',
                                width: '95%',
                                fontSize: 18
                            }}
                        />
                        <Line />
                    </View>
                </View>
                <View >
                    <SubmitBtn text={'Gửi yêu cầu xét duyệt'}/>
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
        top: 100
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