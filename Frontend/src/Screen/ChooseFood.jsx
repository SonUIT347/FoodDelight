import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { data } from './CreateSale'
import Food from '../Component/Food'
const ChooseFood = () => {
    const [chooseData, setChooseData] = useState([])
    console.log(chooseData)
    return (
        <View style={styles.container}>
            <ScrollView style={{ width: '100%', height: 750 }}>
                <View style={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    {data.map((food, index) => (
                        <Food
                            key={index}
                            food={food}
                            id={index}
                            chooseData={chooseData}
                            setChooseData={setChooseData}
                        />
                    ))}
                </View>
            </ScrollView>
            <Text>asds</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // flex:1
    }
})
export default ChooseFood