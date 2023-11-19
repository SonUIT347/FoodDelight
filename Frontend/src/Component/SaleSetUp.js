import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import PercentSetUp from './PercentSetUp';
import MoneyInput from './MoneyInput';
import MoneySetUp from './MoneySetUp';
const SaleSetUp = ({ Info, percent, money, isChoose }) => {
    return (
        <>
            {isChoose=='percent' ? (
                <PercentSetUp
                    Info={Info}
                    percent={percent}
                />
            ) : (
                <MoneySetUp
                    Info={Info}
                    money={money}
                />
            )}
        </>



    )
}
export default SaleSetUp