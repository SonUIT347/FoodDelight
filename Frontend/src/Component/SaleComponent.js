import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import { useTime } from './useTime';
import SubmitBtn from './SubmitBtn';
const SaleComponent = ({ data, navigation }) => {
  const {
    currentTime
  } = useTime()

  // console.log(dateObject);
  const Item = ({ item }) => {
    const dateString = item.gioBatdau; // Replace this with your date string
    const timestamp = Date.parse(dateString);
    const dateObject = new Date(timestamp);
    const isTargetTimeReached = currentTime.getTime() <= dateObject.getTime();
    console.log(isTargetTimeReached)
    return (
      <TouchableOpacity style={styles.sale}>
        <View style={styles.sale_name}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }} >{item.name}</Text>
          {isTargetTimeReached ? (
            <View style={styles.sale_label_active}>
              <Text style={{ fontSize: 12, color: 'white' }}>Đang áp dụng</Text>
            </View>
          ) : (
            <View style={styles.sale_label_deactive}>
              <Text style={{ fontSize: 12, color: 'black' }}>Đã hết hạn</Text>
            </View>
          )}
        </View>
        <View style={styles.sale_name}>
          <Text>{item.gioBatdau.split('T')[1].slice(':', 5)} - {item.gioKetthuc.split('T')[1].slice(':', 5)}</Text>
        </View>
        {/* <Text>
      {isTargetTimeReached
        ? 'Target time has been reached!'
        : `Current Time: ${currentTime.toLocaleTimeString()}`}
    </Text> */}
      </TouchableOpacity>
    )
  }
  const renderItem = ({ item }) => {
    return (
      <Item item={item} />
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
      />
      {/* <SubmitBtn text={'Tao uwu dai'} /> */}
      <TouchableOpacity onPress={() => navigation.navigate('CreateSale')}>
          <Text>Tao uu dai</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  sale: {
    height: 60,
    width: 320,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
    backgroundColor: '#EEEFF0',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  sale_name: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
  },
  sale_label_active: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 20,
    borderRadius: 4,
    backgroundColor: '#45BC1B',
  },
  sale_label_deactive: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 20,
    borderRadius: 4,
    backgroundColor: '#D9D9D9',
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    width: '100%',
    top: 100,
    // backgroundColor:'blue'
  }
})
export default SaleComponent