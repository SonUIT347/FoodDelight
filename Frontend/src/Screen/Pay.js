import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import useAuth from '../context/useAuth';
import axios from "axios";

const username = 'tranvanson'


const Address = {
    province: 'TP. Hồ Chí Minh',
    sdt: '0916986118',
    address: 'KTX khu A, DHQG, TP. Thủ Đức'
}

// const sum = 100000


const Pay=({ route, navigation }) => {
    const [dataAddress, setDataAddress] = useState([])
    const sum = route.params.sum;
    const key = route.params.key;
    const { name } = route;
    useEffect(()=>{
        getAddressSelected()
        // getPrice()
        console.log("Đây là trang " + name)
    }, [name])

    const {
        ip
    } = useAuth()

    const getAddressSelected = async () => {
        try {
            const response = await axios.get(`http://${ip}:8080/AddressSelected/${username}`);
            const dt = response.data;
            console.log(response.data)
            setDataAddress(dt)
        } catch (error) {
            console.error('Error fetching data address', error.message);
        }       
    };

    const handleOnAddress=()=>{
        navigation.navigate('Address', {sum: sum, key: "address"});
    }



    const formattedAmount=(item)=>{
        if (item)
            return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        else
            return
    }
  return (
    <View style={styles.container}>
        <View 
            style={{flexDirection: "row", justifyContent: "space-between", height: 85,
            alignItems: 'center', width: '100%', position: 'relative', alignSelf: 'flex-start'}}
        >
            <AntDesign 
                name="arrowleft" 
                size={30} color="black" 
                style={{backgroundColor: 'green', borderRadius: 20, width: 35,
                height: 35, textAlign: "center", textAlignVertical: 'center', position: "absolute"}}
            />
            <View style={{width: '100%'}}>
                {/* <Text style={{fontSize: 20, fontWeight: 500, textAlign: 'center', width: '100%'}}>{header}</Text> */}
                <Text style={{fontSize: 20, fontWeight: 500, textAlign: 'center', width: '100%'}}>Thanh Toán</Text>
            </View>

        </View>
        <TouchableOpacity onPress={()=>handleOnAddress()}>
            <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', backgroundColor: '#F5FBF3', borderRadius: 15}}>
                <View style={{flex: 1, padding: 10, paddingHorizontal: 20}}>
                    <Text style={{color: '#6B6D7B', paddingVertical: 0}}>Địa chỉ</Text>
                    {/* {console.log(dataAddress)} */}
                    {
                        dataAddress.length == 0 ? (
                        <>
                            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Vui lòng chọn địa chỉ</Text>
                        </>) : (
                        <>
                            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{dataAddress[0].diachi}</Text>
                            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{dataAddress[0].tinh}</Text>
                            <Text style={{fontSize: 14}}>SDT: {dataAddress[0].sdt} </Text>
                        </>)
                         
                    }

                    
                </View>
                <AntDesign name="right" size={24} color="#6AC949" style={{paddingRight: 10}}/>
            </View>
        </TouchableOpacity>

        <View style={{justifyContent: 'flex-end', flex: 1, width: '100%'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5, marginBottom: 20}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Tổng thanh toán</Text>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>{formattedAmount(sum)} đ</Text>
            </View>
            <TouchableOpacity style={{backgroundColor: '#45BC1B', marginBottom: 20, borderRadius: 15}}>
                <Text style={{color: 'white', padding: 20, textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>Thanh Toán</Text>
            </TouchableOpacity>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 30 : 0,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    // backgroundColor: 'white'
    },
});

export default Pay