import { View, Text, TouchableOpacity,TextInput } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
const StockBtn = (food) => {
    console.log(food)
    const [count, setCount] = useState('0')
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
  )
}

export default StockBtn