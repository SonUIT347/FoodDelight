import { View, Text } from 'react-native'
import React, { useState } from 'react'
import FoodStatus from '../Component/FoodStatus'
import { data } from './CreateSale'
import No_Products from '../Component/No_Products'
const FoodAccept = () => {
  const [food, setFood] = useState(data)
  return (

    <View>
      {food == null?(<No_Products/>):(    
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