import { View, Text } from 'react-native'
import React, { useState } from 'react'
import FoodStatus from '../Component/FoodStatus'
import { data } from './CreateSale'
import No_Products from '../Component/No_Products'
const FoodDeny = () => {
  const [food, setFood] = useState(null)
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

export default FoodDeny