import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, FlatList, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import No_Products from '../Component/No_Products';
const Cart=({Data})=>{
    const [data, setData] = useState(Data)
    const [arrCount, setArrCount] = useState(new Array(Data.length).fill(1))
    const [sum, setSum] = useState()
    
    useEffect(()=>{
        setSum(data.reduce((sum, item, index) => sum + arrCount[index]*(item.sale ? (item.priceReduced):(item.price)), 0))
    }, [arrCount])

    const formattedAmount=(item)=>{
        if (item)
            return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        else
            return
    }

    const handleOnPlus = (index) => {
        // console.log(index)
        // Tăng giá trị đếm của phần tử tại chỉ số index
        const newCounters = [...arrCount];
        newCounters[index] += 1;
        setArrCount(newCounters);
    };

    const handleOnMinus = (index) => {
        // console.log(index)
        if(arrCount[index] != 1)
        {
            const newCounters = [...arrCount];
            newCounters[index] -= 1;
            setArrCount(newCounters);
        }
        else
            handleOnDelete(index)
        
    };

    function handlePrice(index, item) {
        // const a = formattedAmount(arrCount[index]*(item.sale ? (item.priceReduced):(item.price)))
        // const newArrPrice = [...arrPrice]
        // newArrPrice[index] = a
        // setArrPrice(newArrPrice);
        // return a
    }

    const handleOnDelete = (index_0) => {
        console.log(index_0)
        Alert.alert(
            'Xác nhận xóa',
            'Bạn có chắc muốn xóa không?',
            [
              {
                text: 'Không',
                style: 'cancel',
              },
              {
                text: 'Có',
                onPress: () => {
                    const updatedData = data.filter((item, index) => index !== index_0);
                    const updateArrCount = arrCount.filter((item, index) => index !== index_0);
                    setData(updatedData)
                    setArrCount(updateArrCount)
                },
              },
            ],
            { cancelable: false }
        );
    }

    const renderItem = ({ item, index }) => (
        <View key={index} style={{backgroundColor: '#F5F5F5', marginHorizontal: 20, marginVertical: 5, borderRadius: 14, flexDirection: 'row'}}>
            <Image source={{uri:item.img}} style={{width: 90, height: 90, borderRadius: 14, margin: 10}}/>
            <View style={{width: '100%', height: '100%', flex: 1, position: 'relative'}}>
                <View style={{position: 'relative', justifyContent: 'center', marginTop: 10, flexDirection: 'row'}}>
                    <Text numberOfLines={1} style={{flex: 1, fontSize: 17, textAlignVertical: 'center', fontWeight: 'bold'}}>{item.name}</Text>

                    <TouchableOpacity onPress={()=>{handleOnDelete(index)}}>
                        <AntDesign 
                            name="delete" 
                            size={20} color="black" 
                            style={{backgroundColor: 'green', borderRadius: 20, width: 30, right: 0, marginRight: 10,
                            height: 30, textAlign: "center", textAlignVertical: 'center'}}
                        />
                    </TouchableOpacity>
                </View>

                <Text style={{color: 'gray'}}>{formattedAmount(item.sale ? (item.priceReduced):(item.price))}đ/Phần</Text>

                <View style={{position: 'absolute', width: '100%', bottom: 10}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1}}>
                        <View style={{backgroundColor: '#6AC949', height: 35, justifyContent: 'center', paddingHorizontal: 10, borderRadius: 10}}>
                            <Text style={{color: 'white', fontSize: 18}}>{formattedAmount(arrCount[index]*(item.sale ? (item.priceReduced):(item.price)))}</Text>
                        </View>
                        <View style={{height: 35, width: 100, backgroundColor:'white', marginRight: 10, flexDirection: 'row', alignItems: 'center', borderRadius: 10}}>
                            <TouchableOpacity style={{flex: 1,}} onPress={()=>{handleOnMinus(index)}}>
                                <AntDesign name="minus" size={24} color="#6AC949" style={{textAlign: 'center'}}/>
                            </TouchableOpacity>
                            <Text style={{flex: 1, fontSize: 18, textAlign: 'center'}}>{arrCount[index]}</Text>
                            <TouchableOpacity style={{flex: 1,}} onPress={()=>{handleOnPlus(index)}}>
                                <AntDesign name="plus" size={24} color="#6AC949" style={{textAlign: 'center'}} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            
        </View>
    );
    
  return (
    <View style={styles.container}>
        {console.log(data.length)}
        <View 
            style={{flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, height: 85,
            alignItems: 'center', width: '100%', position: 'relative' }}
        >
            {/* <AntDesign 
                name="delete" 
                size={20} color="black" 
                style={{backgroundColor: 'green', borderRadius: 20, width: 35, marginLeft: 20, right: 0, marginRight: 20,
                height: 35, textAlign: "center", textAlignVertical: 'center', position: "absolute"}}
            /> */}
            <View style={{width: '100%'}}>
                {/* <Text style={{fontSize: 20, fontWeight: 500, textAlign: 'center', width: '100%'}}>{header}</Text> */}
                <Text style={{fontSize: 20, fontWeight: 500, textAlign: 'center', width: '100%'}}>Giỏ hàng</Text>
            </View>

        </View>
        <View style={{flex: 1}}>
            { 
                data.length == 0 ? (
                    <No_Products/>
                ) : (
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={1} // Số cột bạn muốn hiển thị
                    />
                )
                // <FlatList
                //     data={data}
                //     renderItem={renderItem}
                //     keyExtractor={(item, index) => index.toString()}
                //     numColumns={1} // Số cột bạn muốn hiển thị
                // />
            }
        </View>

        <View style={{width: '100%', alignSelf: 'flex-end', marginVertical: 15}}>
            <View style={{backgroundColor: '#F5FBF3', borderWidth: 1, borderColor: 'green', borderRadius: 10, marginHorizontal: 20}}>
                <TextInput
                    style={{padding: 10}}
                    placeholder='Ghi chú'
                    numberOfLines={4}
                />
            </View>
        </View>

        <View style={{width: '100%', alignSelf: 'flex-end'}}>
            <View style={{marginHorizontal: 20}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5}}>
                    <Text>Số tiền</Text>
                    <Text>{formattedAmount(sum)} đ</Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5}}>
                    <Text>Phí vận chuyển</Text>
                    <Text>0 đ</Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>Tổng thanh toán</Text>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>{formattedAmount(sum)} đ</Text>
                </View>
            </View>
            <TouchableOpacity style={{margin: 20, marginTop: 10, backgroundColor: '#45BC1B', padding: 10, borderRadius: 17, height: 50, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 20, color: 'white'}}>Thanh toán</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};


const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        marginTop: Platform.OS === 'android' ? 30 : 0,
        position: 'relative'
    }
})


export default Cart
