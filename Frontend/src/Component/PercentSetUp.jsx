import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import useAuth from '../context/useAuth';
const PercentSetUp = ({ Info, percent, magiamgia }) => {
    const [food, setFood] = useState(Info)
    const [count, setCount] = useState('0')
    console.log('food sael', food)
    console.log(percent)
    const {ip} = useAuth()
    const handleCount = (name) => {
        if (name === 'plus') {
            if (count < food.SL) {
                const a = parseInt(count) + 1
                setCount(a.toString())
            } else {
                setCount(count)
            }
        } else if (name === 'minus') {
            if (count > 0) {
                const a = parseInt(count) - 1
                setCount(a.toString())
            } else {
                setCount(count)
            }
        }
        console.log(count)
    }
    const createCtgg = async () => {
        const mama = food.mama
        const sotiengiam = food.GiaTien * percent / 100
        const response = await axios.post(`http://${ip}:8080/createctgg`, {
            magiamgia,
            mama,
            count,
            sotiengiam,
        });
        console.log('sucees')
    }
    return (
        <View style={styles.food_ctn}>
            <Image
                source={{ uri: food.image }}
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
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => handleCount('minus')}>
                        <AntDesign name="minus" size={24} color="black" />
                    </TouchableOpacity>
                    <TextInput
                        onChangeText={(text) => setCount(text)}
                        style={{
                            width: 40,
                            textAlign: 'center'
                        }}
                        keyboardType='numeric'
                        value={count}
                    />
                    <TouchableOpacity onPress={() => handleCount('plus')}>
                        <AntDesign name="plus" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <Text>Giá: {food.GiaTien}</Text>
                {percent > 0 ? (<Text>Giá giảm còn: {food.GiaTien - food.GiaTien * percent / 100}</Text>) : (null)}
                <TouchableOpacity onPress={() => createCtgg()}>
                    <Text>Oke</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    food: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 500,
        backgroundColor: 'red'
    },
    food_ctn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d9d9d9',
        width: '96%',
        height: 130,
        marginLeft: 15,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 7
    },
    foodInfo: {
        width: 250,
        height: 120,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        // alignItems:'center'
    }
})
export default PercentSetUp