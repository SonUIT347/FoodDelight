import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FoodStatus from '../Component/FoodStatus'
import Food from '../Component/Food'
import useAuth from '../context/useAuth'
import No_Products from '../Component/No_Products'
import { useRoute } from '@react-navigation/native'

const Category = ({navigation}) => {
    const route = useRoute();
    const category = route.params.category;

    const [food, setFood] = useState([])
    const { ip } = useAuth()
    const getData = async () => {
        try {
            const response = await axios.get(`http://${ip}:8080/getfoodbycategories/${category}`);
            setFood(response.data);
            console.log(food)
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };
    useEffect(() => {
        getData()
    }, [])
    return (
        <View>
            {food.length <= 0 ? (
                <No_Products />
            ) : (
                <ScrollView>
                    {food.map((foodItem) => (
                        <Food
                            key={foodItem.MaMA}  // Assuming there is an 'id' property in your food items
                            food={foodItem}
                            setFood={setFood}
                        />
                    ))}
                </ScrollView>

            )}
        </View>
    )
}

export default Category