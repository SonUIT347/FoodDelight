import { View, Text } from 'react-native'
import React, { useState,useEffect } from 'react'
import FoodStatus from '../Component/FoodStatus'
import No_Products from '../Component/No_Products'
import useAuth from '../context/useAuth'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
const FoodDeny = () => {
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
        const response = await axios.get(`http://${ip}:8080/fooddeny/${macb}`);
        // console.log('Data from API:', response.data);
        setFood(response.data);
      } catch (error) {
        console.error("Error fetching food pending:", error);
      }
    };
  return (

    <View>
      {food.length === 0?(<No_Products/>):(    
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

export default FoodDeny