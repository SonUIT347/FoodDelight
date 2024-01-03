import { View, Text } from 'react-native'
import React, { useState,useEffect } from 'react'
import FoodStatus from '../Component/FoodStatus'
import { data } from './CreateSale'
import No_Products from '../Component/No_Products'
import axios from 'axios'
import useAuth from '../context/useAuth'
const FoodAccept = () => {
  const [food, setFood] = useState([])
  const {
      ip
    } = useAuth()
    useEffect(() => {
      getFoodPending()
    },[])
  
    const macb = 'MC0001'
    const getFoodPending = async () => {
      try {
        const response = await axios.get(`http://${ip}:8080/foodapprove/${macb}`);
        // console.log('Data from API:', response.data);
        setFood(response.data);
      } catch (error) {
        console.error("Error fetching food pending:", error);
      }
    };
  return (

    <View>
      {food === 0?(<No_Products/>):(    
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

export default FoodAccept