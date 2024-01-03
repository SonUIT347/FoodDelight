import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { data } from '../Screen/CreateSale'
import { SafeAreaView } from 'react-native-safe-area-context'

const FoodStatus = ({ food, setFood, type }) => {
    const handleNo = () => {
        console.log('abc')
    }
    const handleAlert = (id, type) => {
        if (type === 'pending' || type === 'deny') {
            Alert.alert(
                'Xác nhận',
                'Bạn có muốn món ăn này?',
                [
                    { text: 'No', onPress: () => handleNo(), style: 'cancel' },
                    { text: 'Yes', onPress: () => deleteFood(id) },
                ],
                { cancelable: false }
            );
        }else if(type === 'accept'){
            Alert.alert(
                'Xác nhận',
                'Món ăn đang được đăng bán. Bạn có muốn món ăn này?',
                [
                    { text: 'No', onPress: () => handleNo(), style: 'cancel' },
                    { text: 'Yes', onPress: () => deleteFood(id) },
                ],
                { cancelable: false }
            );
        }

    }
    const deleteFood = (id) => {
        console.log(type)
        const updatedFood = [...food];
        const index = updatedFood.findIndex(item => item.id == id);
        if (index !== -1) {
            updatedFood.splice(index, 1);
            setFood(updatedFood);
        }
    };
    const Item = ({ food }) => {
        return (
            <View style={styles.food_ctn}>
                <Image
                    source={{ uri: food.Url }}
                    style={{
                        width: 90,
                        height: 120,
                        marginRight: 5,
                        borderRadius: 10,
                    }}
                />
                <View style={styles.foodInfo}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{food.tenma}</Text>
                    <Text>Số lượng: {food.SL}</Text>
                    <Text>Giá: {food.GiaTien}</Text>
                    <View style={styles.button_ctn}>
                        <TouchableOpacity style={{
                            margin: 5, borderRadius: 2,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,

                            elevation: 3,
                            backgroundColor: '#d9d9d9', paddingLeft: 5, paddingRight: 5
                        }}
                            onPress={() => handleAlert(food.id, type)}
                        >
                            <Text style={{ color: 'black' }}>Xóa</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            margin: 5, borderRadius: 2,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,

                            elevation: 3,
                            backgroundColor: '#d9d9d9', paddingLeft: 5, paddingRight: 5
                        }}>
                            <Text>Chỉnh sửa</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    const renderItem = ({ item }) => {
        return (
            <Item
                food={item}
            />
        )
    }
    return (
        <FlatList
            data={food}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />

    )
}
const styles = StyleSheet.create({
    food_ctn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d9d9d9',
        width: '90%',
        height: 130,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 7,
        marginLeft: 17
    },
    food_ctn_touch: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d9d9d9',
        width: '90%',
        height: 130,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 7,
        borderWidth: 3,
        borderColor: '#45BC1B'
    },
    foodInfo: {
        width: 250,
        height: 120,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        // alignItems:'center'
    },
    foodName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    button_ctn: {
        width: 250,
        height: 50,
        // marginRight:200
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'

    }
})
export default FoodStatus