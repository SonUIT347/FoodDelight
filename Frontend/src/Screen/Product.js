import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import useAuth from '../context/useAuth';
import axios from "axios";
import { useRoute } from '@react-navigation/native';

const Product = ({ navigation }) => {
    const route = useRoute()
    const maMA = route.params
    const [count, setCount] = useState(1)
    const [dataFood, setDataFood] = useState('')
    const [dataTypeFood, setDataTypeFood] = useState([])
    const [arrImage, setArrImage] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);
    const [checkCart, setCheckCart] = useState(0);
    const [TenMa, setTenMa] = useState()

    useEffect(() => {
        getFood()
        getImageFood()
        getTypeFood()
        getCheckCart()
    }, []);

    const {
        ip,
        username
    } = useAuth()


    const getCheckCart = async () => {
        try {
            const response = await axios.get(`http://${ip}:8080/checkCart/${username}/${maMA}`);
            const dt = response.data;
            setCheckCart(dt[0].COUNT)
        } catch (error) {
            console.error('Error fetching data userId', error.message);
        }
    };

    const handleAddCart = async (money) => {
        console.log("check cart: ", checkCart)
        if (checkCart == 0) {
            var MaGH
            try {
                const response = await axios.get(`http://${ip}:8080/getIdCart/${username}`);
                const dt = response.data;
                MaGH = (dt[0].MaGH)
            } catch (error) {
                console.error('Error fetching data userId', error.message);
            }
            console.log(MaGH)

            try {
                const response = await fetch(`http://${ip}:8080/insertCartDetail`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ MaGH: MaGH, MaMA: maMA, GiaTien: money }),
                });
                if (response.status === 200) {
                    const responseData = await response.json(); // Parse the response as JSON
                } else {
                    // Authentication failed
                    alert('Update failed. Please check address.');
                    console.log('Update failed');
                }
            } catch (error) {
                console.log('Update error:', error);
            }
            alert('Thêm giỏ hàng thành công');
            getCheckCart()
        }
        else {
            alert('Sản phẩm đã được thêm vào giỏ hàng');
        }
    }

    const getFood = async () => {
        try {

            console.log(maMA)
            const response = await axios.get(`http://${ip}:8080/getFood/${maMA}`);
            const dt = response.data;
            // console.log('data' + dt[0])
            setDataFood(dt[0])
        } catch (error) {
            console.error('Error fetching data userIdddd', error.message);
        }
    };

    const getImageFood = async () => {
        try {
            const response = await axios.get(`http://${ip}:8080/getImageFood/${maMA}`);
            const dt = response.data;
            console.log(dt)
            setArrImage(dt)
        } catch (error) {
            console.error('Error fetching data imageFood', error.message);
        }
    }

    const getTypeFood = async () => {
        try {
            const response = await axios.get(`http://${ip}:8080/getTypeFood/${maMA}`);
            const dt = response.data;
            console.log(dt)
            setDataTypeFood(dt)
        } catch (error) {
            console.error('Error fetching data imageFood', error.message);
        }
    }

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % arrImage.length;
        setCurrentIndex(nextIndex);
    };

    const handlePrev = () => {
        const prevIndex = (currentIndex - 1 + arrImage.length) % arrImage.length;
        setCurrentIndex(prevIndex);
    };

    const formattedAmount = (item) => {
        if (item)
            return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        else
            return 0
    }
    const handleOnPlus = () => {
        // console.log(index)
        // Tăng giá trị đếm của phần tử tại chỉ số index
        setCount(count + 1)
    };
    const handleOnMinus = () => {
        // console.log(index)
        if (count != 1)
            setCount(count - 1)
    };


    return (
        <View style={styles.container}>
            <View
                style={{
                    flexDirection: "row", justifyContent: "space-between", height: 85,
                    alignItems: 'center', width: '100%', position: 'relative', alignSelf: 'flex-start'
                }}
            >
                <AntDesign
                    name="arrowleft"
                    size={30} color="black"
                    style={{
                        backgroundColor: 'green', borderRadius: 20, width: 35,
                        height: 35, textAlign: "center", textAlignVertical: 'center', position: "absolute"
                    }}
                />
                <View style={{ width: '100%' }}>
                    {/* <Text style={{fontSize: 20, fontWeight: 500, textAlign: 'center', width: '100%'}}>{header}</Text> */}
                    <Text style={{ fontSize: 20, fontWeight: 500, textAlign: 'center', width: '100%' }}>Chi tiết sản phẩm</Text>
                </View>
            </View>
            {/* <ScrollView horizontal={true} style={{width: 250}}>
            <Image source={{uri:data.img}}  style={{width: 250, height: 250, borderRadius: 0}}/>
            <Image source={{uri:data.img}}  style={{width: 250, height: 250, borderRadius: 0}}/>
            <Image source={{uri:data.img}}  style={{width: 250, height: 250, borderRadius: 0}}/>
        </ScrollView> */}

            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => handlePrev()} style={{ width: 50 }}>
                    <Text style={{ textAlign: 'center', textAlignVertical: 'center', fontSize: 30 }}>{'<'}</Text>
                </TouchableOpacity>
                <Image source={{ uri: arrImage.length == 0 ? (null) : (arrImage[currentIndex].Url) }} style={{ width: 200, height: 200, marginBottom: 10 }} />

                <TouchableOpacity onPress={() => handleNext()} style={{ width: 50 }}>
                    <Text style={{ textAlign: 'center', textAlignVertical: 'center', fontSize: 30 }}>{'>'}</Text>
                </TouchableOpacity>
            </View>


            <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
                {dataTypeFood.map((item, index) => (
                    <Text
                        style={{
                            backgroundColor: '#EDF9E9', padding: 10, borderRadius: 10,
                            alignSelf: 'flex-start', marginTop: 10, marginHorizontal: 5
                        }}
                        key={index}
                    >
                        {item.TenLoaiMA}
                    </Text>
                ))}
            </View>


            {dataFood && (
                <Text style={{ fontSize: 20, fontWeight: 'bold', paddingVertical: 10, width: '100%' }} numberOfLines={1}>
                    {dataFood.TenMA}
                </Text>
            )}

            <View style={{ flexDirection: 'row' }}>
                <View style={{ backgroundColor: '#F5FBF3', flex: 1, marginRight: 25, borderRadius: 10, borderWidth: 1, borderColor: 'green', padding: 10 }}>
                    <Text style={{ fontSize: 14, fontWeight: '500', color: '#6AC949' }}>Giá bán</Text>
                    <View style={{ flexDirection: 'row' }}>
                        {dataFood && (
                            <Text style={{ fontSize: 16, fontWeight: '500', color: 'gray' }}>{formattedAmount(dataFood.GiaTien)} VND</Text>
                        )}

                        {/* <Text style={{fontSize: 16, fontWeight: '500', color: '#dddd', marginLeft: 5, textDecorationLine: 'line-through'}} >{formattedAmount(dataFood.GiaTien)} đ</Text> */}

                    </View>
                </View>
                <View style={{ backgroundColor: '#F5FBF3', alignItems: 'center', padding: 10, borderRadius: 10, borderWidth: 1, borderColor: 'green' }}>
                    <Text style={{ fontSize: 14, fontWeight: '500', color: '#6AC949' }}>Còn hàng</Text>
                    {dataFood && (
                        <Text style={{ fontSize: 14, fontWeight: '500', color: 'gray' }}>{dataFood.SL}</Text>
                    )}
                    
                </View>
            </View>

            <ScrollView style={{ backgroundColor: '#EDF9E9', marginVertical: 20, flex: 1, width: '100%' }}>
            {dataFood && (
                <Text style={{ padding: 10, flex: 1, width: '100%' }}>{dataFood.MoTa == "" ? ("Chưa có mô tả món ăn") : (dataFood.MoTa)}</Text>

            )}
            </ScrollView>

            <View style={{ justifyContent: 'flex-end', width: '100%' }}>
                <View style={{
                    backgroundColor: '#EDF9E9', width: '100%',
                    flexDirection: 'row', alignItems: 'center', borderRadius: 10, height: 40
                }}
                >
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => handleOnMinus()}>
                        <AntDesign name="minus" size={24} color="#6AC949" style={{ textAlign: 'center' }} />
                    </TouchableOpacity>
                    <Text style={{ flex: 1, fontSize: 18, textAlign: 'center' }}>{count}</Text>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => handleOnPlus()}>
                        <AntDesign name="plus" size={24} color="#6AC949" style={{ textAlign: 'center' }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20, marginTop: 10 }}>
                    <TouchableOpacity onPress={() => { }} style={styles.closeButton1}>
                        <Text style={styles.closeButtonText}>Mua</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleAddCart(dataFood.GiaTien)} style={styles.closeButton2}>
                        {/* <Text style={styles.closeButtonText}>Thêm vào giỏ hàng</Text> */}
                        <AntDesign name="shoppingcart" size={35} color="white" style={{ textAlign: 'center' }} />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginHorizontal: 20,
        marginTop: Platform.OS === 'android' ? 30 : 0,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    closeButton1: {
        backgroundColor: '#6AC949',
        padding: 10,
        width: '40%',
        borderRadius: 5,
        marginTop: 10,
        height: 60,
        justifyContent: 'center'
    },
    closeButton2: {
        backgroundColor: '#6AC949',
        padding: 10,
        width: '40%',
        borderRadius: 5,
        marginTop: 10,
        height: 60,
        justifyContent: 'center'
    },
    closeButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
});
export default Product