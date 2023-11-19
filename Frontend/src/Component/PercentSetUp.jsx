import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
const PercentSetUp = ({ Info, percent, money }) => {
    const [food, setFood] = useState(Info)
    const [count, setCount] = useState('0')
    console.log(percent)
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
                source={{ uri: food.img }}
                style={{
                    width: 90,
                    height: 120,
                    marginRight: 5,
                    borderRadius: 10,
                }}
            />
            <View style={styles.foodInfo}>
                <Text style={{fontSize:20, fontWeight:'bold'}}>{food.foodName}</Text>
                <Text>Số lượng: {food.stock}</Text>
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
                <Text>Giá: {food.price}</Text>
                {percent > 0?( <Text>Giá: {food.price - food.price*percent/100}</Text>):(null)}
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
        width: '100%',
        height: 130,
        marginLeft: 15,
        marginBottom: 10,
        marginTop: 10
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