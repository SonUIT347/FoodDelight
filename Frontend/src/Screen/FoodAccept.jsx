import { View, Text } from 'react-native'
import React, { useState } from 'react'
import FoodStatus from '../Component/FoodStatus'
import { data } from './CreateSale'
const FoodAccept = () => {
  const [food, setFood] = useState([...data])
  return (

    <View>
      <FoodStatus
        food={food}
        setFood={setFood}
        type={'accept'}
      // deleteFood={deleteFood}
      />
    </View>

  )
}

export default FoodAccept