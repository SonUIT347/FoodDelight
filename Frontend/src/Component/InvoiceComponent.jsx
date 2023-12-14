import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
// import { data } from '../Screen/CreateSale'
import Food from './Food'
const InvoiceComponent = ({ food }) => {
    useEffect(() => {
        food.sumPrice = food.sumPrice + food.price
    },[])
    const sum = (b) => {
        var a = a + b
        console.log(b)
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
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{food.foodName}</Text>
                <Text style={{marginTop:5, marginBottom:5, fontSize: 15}}>Số lượng: {food.stock}</Text>
                <Text style={{fontSize: 15}}>Giá: {food.price}</Text>
                {sum(food.price)}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {

    },
    food_ctn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d9d9d9',
        width: '90%',
        height: 130,
        marginBottom: 5,
        // marginTop: 10,
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
export default InvoiceComponent