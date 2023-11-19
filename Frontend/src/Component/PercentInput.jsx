import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import SaleInput from './SaleInput'

const PercentInput = ({ percent, setPercent, isChoose }) => {
    const [check, setCheck] = useState(false)
    const checkfunc = () => {
        if (percent > 100 || percent < -3) {
            setCheck(false)
        } else {
            setCheck(true)
        }
    }
    return (
        <>
            <SaleInput
                title={'Nhập phần trăm'}
                placeholder={'Nhập phần trăm'}
                saleName={percent}
                setSaleName={setPercent}
                isChoose={isChoose}
            />
        {check?(
            <Text style={{color:'red'}}>*Giá tiền phải lớn hơn 0 và bé hơn 100</Text>
        ):null}
        </>

    )
}

export default PercentInput