import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
const MoneySetUp = ({ Info, percent, money }) => {
    const [food, setFood] = useState(Info)
    const [count, setCount] = useState('0')
    const [discount, setDiscount] = useState(0)
    useEffect(() => {
        setDiscount(food.price - money)
    }, [money])
    const handleCount = (name) => {

        if (name === 'plus') {
            if (count < food.stock) {
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
                <Text style={styles.foodName}>{food.tenma}</Text>
                <Text>Số lượng: {food.SL}</Text>
                <View style={{ flexDirection: 'row' }}>
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
                </View>
                <Text>Giá: {food.GiaTien}</Text>
                {discount > 0 ?
                    (<Text>Giá giảm còn: {discount}</Text>) :
                    <Text style={{ color: 'red', fontSize: 15 }}>Giá giảm còn: {discount}</Text>}

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
    },
    foodName: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})
export default MoneySetUp