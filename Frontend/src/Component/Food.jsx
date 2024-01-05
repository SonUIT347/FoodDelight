import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react'
const Food = ({ food, id, chooseData, setChooseData }) => {
    // console.log(food)
    const [isTouch, setIsTouch] = useState(false)
    const choose = () => {
        const isAlreadySelected = chooseData.some(selectedFood => selectedFood.mama === food.mama);

        if (isAlreadySelected) {
            // If the food item is already selected, remove it from chooseData
            const updatedData = chooseData.filter(selectedFood => selectedFood.mama !== food.mama);
            setChooseData(updatedData);
        } else {
            // If the food item is not selected, add it to chooseData
            const updatedData = [...chooseData, food];
            setChooseData(updatedData);
        }

        // Toggle the isTouch state
        setIsTouch(!isTouch);
    };

    return (
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '95%', marginLeft: 10 }}>
                <View style={[styles.food_ctn, isTouch && styles.food_ctn_touch]}>
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
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{food.TenMA}</Text>
                        <Text>Số lượng: {food.SL}</Text>
                        <Text>Giá: {food.GiaTien}</Text>
                    </View>
                </View>
        </View>
    )
}
const styles = StyleSheet.create({
    food_ctn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d9d9d9',
        width: '100%',
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
        width: '100%',
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