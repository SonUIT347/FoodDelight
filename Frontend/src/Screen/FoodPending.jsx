import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import FoodStatus from '../Component/FoodStatus'
import { data } from './CreateSale'
import No_Products from '../Component/No_Products'
import axios from 'axios'
import useAuth from '../context/useAuth'
import AsyncStorage from '@react-native-async-storage/async-storage'
const FoodPending = () => {
  const [food, setFood] = useState([])
  const {
      ip
    } = useAuth()
    useEffect(() => {
      getFoodPending()
    },[])
    const getFoodPending = async () => {
      try {
        const macb = await AsyncStorage.getItem('IdUser')
        const response = await axios.get(`http://${ip}:8080/foodpending/${macb}`);
        setFood(response.data);
      } catch (error) {
        console.error("Error fetching food pending:", error);
      }
    };
  return (
    <View>
      {food.length === 0 ?(<No_Products/>):(    
      <FoodStatus
        food={food}
        setFood={setFood}
        type={'accept'}
      // deleteFood={deleteFood}
      />
      )}
    </View>
  )
}

export default FoodPending