import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
const Food = ({ food, id, chooseData, setChooseData }) => {
    // console.log(food)
    const [isTouch, setIsTouch] = useState(false)
    const [temp, setTemp] = useState([])
    const choose = (id) => {
        const isAlreadySelected = chooseData.includes(id);
        console.log(isAlreadySelected)
        if (isAlreadySelected) {
            // If the food item is already selected, remove it from temp
            const updatedTemp = chooseData.filter(item => item !== id);
            setChooseData(updatedTemp);
        } else {
            // If the food item is not selected, add it to temp
            
            const updatedTemp = [...chooseData, id];
            setChooseData(updatedTemp);
        }

        // Toggle the isTouch state
        setIsTouch(!isTouch);

        // Debugging logs
        // console.log('id ' + id);
        // console.log('asd ' + temp);
        // console.log(chooseData);
    };
    return (
        <>
            <TouchableOpacity onPress={() => choose(food.id)}>
                <View style={[styles.food_ctn, isTouch && styles.food_ctn_touch]}>
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