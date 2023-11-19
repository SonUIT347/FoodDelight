import { View, Text } from 'react-native'
import React from 'react'
import SaleInput from './SaleInput'

const MoneyInput = ({money, setMoney, isChoose}) => {
  return (
    <>
        <SaleInput
            title={'Nhập giá tiền'}
            placeholder={'Nhập giá tiền'}
            saleName={money}
            setSaleName={setMoney}
            isChoose={isChoose}
        />
    </>
  )
}

export default MoneyInput