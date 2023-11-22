import { View, Text } from 'react-native'
import React, { useState } from 'react'
import FoodStatus from '../Component/FoodStatus'
import { data } from './CreateSale'
const FoodPending = () => {
  const [food, setFood] = useState([...data])

  return (
    <View>
     <FoodStatus
      food={food}
      setFood={setFood}
      // deleteFood={deleteFood}
      type={'pending'}
     />
    </View>
  )
}

export default FoodPending