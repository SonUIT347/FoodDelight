import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
const Food = ({ food }) => {
    // console.log(food)
    const [isTouch, setIsTouch] = useState(false)
    return (
        <>
            <TouchableOpacity onPress={() => setIsTouch(!isTouch)}>
                {isTouch ? (
                    <View style={styles.food_ctn_touch}>
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
                            <Text>Số lượng: {food.stock}</Text>
                            <Text>Giá: {food.price}</Text>
                        </View>
                    </View>
                ) : (
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
                            <Text>Số lượng: {food.stock}</Text>
                            <Text>Giá: {food.price}</Text>
                        </View>
                    </View>
                )}
            </TouchableOpacity>
        </>

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
        borderRadius: 7
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
    }
})
export default Food