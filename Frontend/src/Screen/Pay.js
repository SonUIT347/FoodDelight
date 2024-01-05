import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import useAuth from '../context/useAuth';
import axios from "axios";
import moment from 'moment';
import { useFocusEffect } from '@react-navigation/native';
import { Alert } from 'react-native';




const Address = {
    province: 'TP. Hồ Chí Minh',
    sdt: '0916986118',
    address: 'KTX khu A, DHQG, TP. Thủ Đức'
}


// const PayDirectly = true

// const TongTien = 100000

// const MaMA = 'MA0001'

// const SL = 1

// const MaCollaborator = "MC0001"


const Pay=({ route, navigation }) => {
    const [dataAddress, setDataAddress] = useState([])
    const [count, setCount] = useState()
    const [check, setCheck] = useState()
    const [maKH, setMaKH] = useState()

    // {sum: TongTien, MaMA, SL, MaCollaborator}
    // const [dataCol, setDataAddress] = useState([])
    const sum = route.params?.sum;
    const MaMA = route.params?.MaMA;
    const SL = route.params?.SL;
    const PayDirectly = route.params?.PayDirectly;
    const MaCollaborator = route.params?.MaCollaborator;


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          // Logic được thực hiện khi màn hình được focus (hiển thị lại)
          console.log('Pay screen is focused');
          // Thêm các logic cần thiết để render lại trang Pay khi cần
          getAddressSelected()
          getCountBill()
          getCheck()
          // ...
        });
    
        return unsubscribe;
    }, [navigation]);

    const {
        ip,
        username
    } = useAuth()

    const getCheck=async()=>{
        try {
            const response = await axios.get(`http://${ip}:8080/checkSL/${maKH}`);
            const dt = response.data;
            setCheck(dt[0].count)
        } catch (error) {
            console.error('Error fetching data count bill', error.message);
        }
    }

    const getAddressSelected = async () => {
        try {
            console.log(username)
            console.log(ip)
            const response = await axios.get(`http://${ip}:8080/AddressSelected/${username}`);
            const dt = response.data;
            console.log(response.data)
            setDataAddress(dt)
        } catch (error) {
            console.error('Error fetching data address', error.message);
        }       
    };

    const getCountBill = async () => {
        try {
            const response = await axios.get(`http://${ip}:8080/getCoutBill`);
            const dt = response.data;
            setCount(dt[0].count)
        } catch (error) {
            console.error('Error fetching data count bill', error.message);
        }

        try {
            const response = await axios.get(`http://${ip}:8080/getUserId/${username}`);
            const dt = response.data;
            setMaKH(dt[0].IdUser)
        } catch (error) {
            console.error('Error fetching data count bill', error.message);
        }
    };

    const handleOnAddress=()=>{
        navigation.navigate('Address', {sum: sum, key: "address"});
    }



    const formattedAmount=(item)=>{
        if (item)
            return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        else
            return 0
    }

    const insertBillDetail = async(item, MaHD)=>{
        console.log("insertBillDetail",MaHD, item.MaMA, item.SL, item.GiaTien)
        try {
            const response = await fetch(`http://${ip}:8080/insertBillDetail`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({MaHD: MaHD, MaMA: item.MaMA, SL: item.SL, GiaTien: item.GiaTien}),
            });
            if (response.status === 200) {
                // const responseData = await response.json(); // Parse the response as JSON
                console.log("insert thành công")
            } else {
                // Authentication failed
                alert('Delete failed. Please check address.');
                console.log('insert failed' + MaHD);
            }
        } catch (error) {
            console.log('Delete error:', error);
        }
    }

    const insertBillDetails=async(MaHD, MaCollab)=>{
        try {
            const response = await axios.get(`http://${ip}:8080/cart/${maKH}/${MaCollab}`);
            const dt = response.data;
            console.log(dt)
            dt.map((item)=>{
                insertBillDetail(item, MaHD)
            })
        } catch (error) {
            console.error('Error fetching data count bill', error.message);
        }
    }

    const insertBill=async(item, index)=>{
        var MaHD
        if (count + 1 + index < 10)
            MaHD = "HD000" + (count + 1 + index)
        else
            if (count + 1 + index < 100)
                MaHD = "HD00" + (count + 1 + index)
            else
                if (count + 1 + index < 1000)
                    MaHD = "HD0" + (count + 1 + index)
                else
                    MaHD = "HD" + (count + 1 + index)
        const now = moment();
        const Day = now.format('YYYY-MM-DD');
        // const time = now.format('HH:mm:ss');
        console.log(MaHD)
        console.log(maKH)

        try {
            const response = await fetch(`http://${ip}:8080/insertBill`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({MaHD, TongTien: item.TongTien, MaKH: maKH, MaCollaborator: item.MaCollaborator,
                                    Day, DiaChi: (dataAddress[0].diachi+", "+dataAddress[0].tinh), Sdt: dataAddress[0].sdt}),
            });
            if (response.status === 200) {
                // const responseData = await response.json(); // Parse the response as JSON
                console.log("insert thành công")
                insertBillDetails(MaHD, item.MaCollaborator)
            } else {
                // Authentication failed
                alert('Delete failed. Please check address.');
                console.log('Delete failed');
            }
        } catch (error) {
            console.log('Delete error:', error);
        }

        try {
            const response = await fetch(`http://${ip}:8080/UpdatePriceCart`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({sum: 0, note: '', username: username}),
            });
            if (response.status === 200) {
                const responseData = await response.json(); // Parse the response as JSON
            } else {
                // Authentication failed
                alert('Update failed. Please check address.');
                console.log('Update failed');
            }
        } catch (error) {
            console.log('Update error:', error);
        }
        
        try {
            const response = await fetch(`http://${ip}:8080/deleteCart`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({sum: 0, note: '', username: username}),
            });
            if (response.status === 200) {
                const responseData = await response.json(); // Parse the response as JSON
            } else {
                // Authentication failed
                alert('Update failed. Please check address.');
                console.log('Update failed');
            }
        } catch (error) {
            console.log('Update error:', error);
        }

        try {
            const response = await fetch(`http://${ip}:8080/DeleteCartByMaKH`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({MaKH: maKH}),
            });
            if (response.status === 200) {
                const responseData = await response.json(); // Parse the response as JSON
            } else {
                // Authentication failed
                alert('Update failed. Please check address.');
                console.log('Update failed');
            }
        } catch (error) {
            console.log('Update error:', error);
        }
        
    }

    const handlePay=()=>{
        Alert.alert(
            'Xác nhận thanh thoán',
            'Bạn có chắc muốn thanh toán không?',
            [
              {
                text: 'Không',
                style: 'cancel',
              },
              {
                text: 'Có',
                onPress: async() => { 
                    
                    if (PayDirectly)
                    {
                        var MaHD
                        if (count + 1 < 10)
                            MaHD = "HD000" + (count + 1)
                        else
                            if (count + 1 < 100)
                                MaHD = "HD00" + (count + 1)
                            else
                                if (count + 1 < 1000)
                                    MaHD = "HD0" + (count + 1)
                                else
                                    MaHD = "HD" + (count + 1)
                        const now = moment();
                        const Day = now.format('YYYY-MM-DD');
                        console.log(MaHD)
                        console.log(maKH)

                        try {
                            const response = await fetch(`http://${ip}:8080/insertBill`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({MaHD, TongTien: sum, MaKH: maKH, MaCollaborator: MaCollaborator,
                                                    Day, DiaChi: (dataAddress[0].diachi+", "+dataAddress[0].tinh), Sdt: dataAddress[0].sdt}),
                            });
                            if (response.status === 200) {
                                // const responseData = await response.json(); // Parse the response as JSON
                                console.log("insert thành công")
                            } else {
                                // Authentication failed
                                alert('Delete failed. Please check address.');
                                console.log('Delete failed');
                            }
                        } catch (error) {
                            console.log('Delete error:', error);
                        }

                        try {
                            const response = await fetch(`http://${ip}:8080/insertBillDetail`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({MaHD: MaHD, MaMA: MaMA, SL: SL, GiaTien: sum}),
                            });
                            if (response.status === 200) {
                                // const responseData = await response.json(); // Parse the response as JSON
                                console.log("insert thành công")
                                Alert.alert(
                                    'Thông báo',
                                    'Thanh toán thành công',
                                    [
                                      {
                                        text: 'Ok',
                                        style: 'cancel',
                                        onPress: () => {
                                            navigation.navigate('Home');
                                        },
                                      },
                                    ],
                                    { cancelable: false }
                                );
                                
                            } else {
                                // Authentication failed
                                alert('Delete failed. Please check address.');
                                console.log('insert failed' + MaHD);
                            }
                        } catch (error) {
                            console.log('Delete error:', error);
                        }
                        

                        //  adsfadfsasdfs
                    }
                    else
                    {
                        if(check == 0)
                        {
                            
                            try {
                                const response = await axios.get(`http://${ip}:8080/CollabInCart/${username}`);
                                const dt = response.data;
                                console.log(dt)
                                dt.map((item, index)=>{
                                    insertBill(item, index)
                                })
                            } catch (error) {
                                console.error('Error fetching data collab', error.message);
                            }
                            Alert.alert(
                                'Thông báo',
                                'Thanh toán thành công',
                                [
                                  {
                                    text: 'Ok',
                                    style: 'cancel',
                                    onPress: () => {
                                        navigation.navigate('Home');
                                    },
                                  },
                                ],
                                { cancelable: false }
                            );
                            getCheck()
                        }
                        else
                        {
                            alert('Thanh toán không thành công');
                        } 
                    }
                    getCountBill()                 
                },
              },
            ],
            { cancelable: false }
        );
        
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
            <TouchableOpacity style={{backgroundColor: '#45BC1B', marginBottom: 20, borderRadius: 15}} onPress={()=>handlePay()}>
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