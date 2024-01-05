import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import useAuth from '../context/useAuth';
import axios from "axios";

// const username='tranvanson'

const data = [{}, {}]

const images = [
    'https://file.hstatic.net/200000385717/article/com_ga_xoi_mooo_595935f004c64a898650dc9363b49785.jpg',
    'https://media.phunutoday.vn/files/upload_images/2016/01/21/cach-lam-banh-my-trung-ngon-1-phunutoday_vn.jpg',
    'https://inoxquanghuy.vn/wp-content/uploads/2022/12/hu-tieu-xuong-ngon.jpg',
    // Thêm đường dẫn hình ảnh khác nếu cần
  ];
  

const DetailedBill=({MaHD, ip})=>{
    const [dataDetailedBill, setDataDetailedBill] = useState([])

    useEffect(()=>{
        getDetailedBill()
    }, [])

    const getDetailedBill = async () => {
        try {
          const response = await axios.get(`http://${ip}:8080/getDetailedBill/${MaHD}`);
          console.log(response.data)
          setDataDetailedBill(response.data)
          
        } catch (error) {
          console.error('Error fetching detailed bill:', error.message);
        }
    }

    const formattedAmount=(item)=>{
        if (item)
            return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        else
            return
    }


    return (
        <>
            {dataDetailedBill.map((item, index)=>(
                    <View
                        key={index}
                        style={{backgroundColor: '#EEEFF0', marginBottom: 10, 
                        borderRadius: 10, flexDirection: 'row', alignItems: 'center', marginHorizontal: 10}}
                    >
                        {/* {console.log("đây là chi tiết món ăn")} */}
                        {/* {console.log(item)} */}
                        <Image source={{uri:images[0]}} style={{width: 90, height: 90, borderRadius: 14, margin: 5}}/>
        
                        <View style={{flex: 1, padding: 5, paddingLeft: 0}}>
                            <Text style={{paddingHorizontal: 10, fontSize: 16, fontWeight: 500, paddingBottom: 5}} numberOfLines={1}>{item.TenMA}</Text>
                            <Text style={{paddingHorizontal: 10, fontSize: 15, paddingBottom: 5}}>SL: {item.SL}</Text>
                            <Text style={{paddingHorizontal: 10, fontSize: 15, paddingBottom: 5}}>Giá: {formattedAmount(item.GiaTien*item.SL)} đ</Text>
                            {/* <Text style={{paddingHorizontal: 10, fontSize: 15, paddingBottom: 10}}>Sản phẩm:</Text> */}
                        </View>
                    </View>
                ))
            }
        </>
    )

}

const Bills=({navigation}) => {
    const [dataBill, setDataBill] = useState([])
    

    useEffect(()=>{
        const unsubscribe = navigation.addListener('focus', () => {
            getBill()
            // ...
          });
      
          return unsubscribe;
    }, [])

    const {
        ip,
        username
    } = useAuth()

    const getBill = async () => {
        try {
            const response = await axios.get(`http://${ip}:8080/getBill/${username}`);
            const dt = response.data;
            // console.log(response.data)
            setDataBill(dt)
        } catch (error) {
            console.error('Error fetching data address', error.message);
        }       
    };

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
                <Text style={{fontSize: 20, fontWeight: 500, textAlign: 'center', width: '100%'}}>Lịch sử mua hàng</Text>
            </View>

        </View>
        <ScrollView style={{flex: 1, width: '100%', borderRadius: 10}} showsVerticalScrollIndicator={true}>
            {dataBill.map((item0)=>(
                <View
                    key = {item0.MaHD} 
                    style = {{backgroundColor: '#F5FBF3', borderRadius: 10, marginBottom: 20}}
                >
                    <Text style={{fontSize: 16, fontWeight: 500, padding: 10}}>Thông tin đơn hàng #{item0.MaHD}</Text>
                    <Text style={{paddingHorizontal: 10, fontSize: 15, paddingBottom: 5}}>Địa chỉ: {item0.DiaChi}</Text>
                    <Text style={{paddingHorizontal: 10, fontSize: 15, paddingBottom: 5}}>SDT: {item0.Sdt}</Text>
                    <Text style={{paddingHorizontal: 10, fontSize: 15, paddingBottom: 5}}>Thời gian đặt: {item0.ThoiGianNhanDon}</Text>
                    <Text style={{paddingHorizontal: 10, fontSize: 15, paddingBottom: 5}}>Sản phẩm: </Text>

                    <DetailedBill MaHD={item0.MaHD} ip={ip}/>
                    

                    <Text style={{paddingHorizontal: 10, fontSize: 15, paddingBottom: 5, textAlign: 'right', fontStyle: 'italic'}}>Hình thức thanh toán: COD</Text>
                    <Text style={{paddingHorizontal: 10, fontSize: 15, paddingBottom: 5, textAlign: 'right', fontStyle: 'italic'}}>Số mặt hàng: {item0.SLMH}</Text>
                    <Text style={{paddingHorizontal: 10, fontSize: 15, paddingBottom: 5, textAlign: 'right', fontWeight: 500, fontStyle: 'italic'}}>Tổng hóa đơn: {formattedAmount(item0.TongTien)} đ</Text>

                    {
                        item0.TrangThai == 'pending' ? (
                            
                            <View style={{alignSelf: 'flex-end', backgroundColor: 'orange', margin: 10, marginTop: 0, borderRadius: 8}}>
                                <Text style={{padding: 8, fontSize: 15, fontWeight: 500, color: 'white'}}>Chưa nhận đơn</Text>
                            </View>
                        ) : (
                            <View style={{alignSelf: 'flex-end', backgroundColor: '#45BC1B', margin: 10, marginTop: 0, borderRadius: 8}}>
                                <Text style={{padding: 8, fontSize: 15, fontWeight: 500, color: 'white'}}>Đã nhận đơn</Text>
                            </View>
                        )
                    }
                
                </View>
            ))}   
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: Platform.OS === 'android' ? 30 : 0,
    marginHorizontal: 10,
}});

export default Bills