import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Line from './Line'
const SaleInput = ({ title, placeholder, saleName, setSaleName, isChoose }) => {
    const [inputValue, setInputValue] = useState('')
    const handleInput = (text) => {
        const numericValue = text.replace(/[^0-9]/g, '');
        if (isChoose === 'percent') {
            if (text <= 100 && text >= 0) {
                setSaleName(numericValue);
                console.log('aa')
            }
        }else{
            setSaleName(numericValue);
        }
    }
    return (
        <>
            <View style={styles.sale_name}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{title}</Text>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={'#D9D9D9'}
                    style={styles.name_input}
                    keyboardType='numeric'
                    multiline
                    maxLength={40}
                    value={saleName}
                    onChangeText={(text) => handleInput(text)}
                />
                {/* <DateTimePicker value={date}/> */}
            </View>
            <Line />
        </>
    )
}
const styles = StyleSheet.create({
    sale_name: {
        flexDirection: 'column',
        // justifyContent:'flex-start'
        marginLeft: 10,
        marginRight: 10,
        width: '90%',
        height: 50
    },
    name_input: {
        width: '98%',
        height: 40,
        marginLeft: 10
    },
}
)
export default SaleInput