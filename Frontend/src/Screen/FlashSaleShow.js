import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import SaleComponent from '../Component/SaleComponent'
const data = [
  {
    name:'sale hom nay',
    gioBatdau:'2023-11-15T19:00:00',
    gioKetthuc:'2023-11-15T12:50:00'
  },
  {
    name:'sale hom nay1',
    gioBatdau:'2023-11-16T12:00:00',
    gioKetthuc:'2023-11-15T12:50:00'
  },
  {
    name:'sale hom nay1',
    gioBatdau:'2023-11-15T12:00:00',
    gioKetthuc:'2023-11-15T12:50:00'
  },
  {
    name:'sale hom nay1',
    gioBatdau:'2023-11-13T12:00:00',
    gioKetthuc:'2023-11-15T12:50:00'
  },
  {
    name:'sale hom nay1',
    gioBatdau:'2023-11-18T17:00:00',
    gioKetthuc:'2023-11-15T12:50:00'
  },
  {
    name:'sale hom nay1',
    gioBatdau:'2023-11-15T12:00:00',
    gioKetthuc:'2023-11-15T22:50:00'
  },  {
    name:'sale hom nay1',
    gioBatdau:'2023-11-15T12:00:00',
    gioKetthuc:'2023-11-15T15:50:00'
  },
  {
    name:'sale hom nay2',
    gioBatdau:'2023-11-15T12:00:00',
    gioKetthuc:'2023-11-15T12:50:00'
  }
]
const FlashSaleShow = ({navigation}) => {
  return (
  
        <SaleComponent data={data}/>

  )
}

export default FlashSaleShow
const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
    }
})