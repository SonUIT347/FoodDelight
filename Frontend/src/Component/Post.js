import react from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { Zocial } from '@expo/vector-icons';

const data={
    img: "https://file.hstatic.net/200000385717/article/com_ga_xoi_mooo_595935f004c64a898650dc9363b49785.jpg",
    name: 'Cơm gà xối mỡ',
    description: 'Cơm gà xối mỡ siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon siu ngon',
    price: 20000,
    quantitySold: 2100,
    sale: true,
    priceReduced: 18000,
    
}
// console.log(provincesAndCities.length)


const Post = ({data}) => {

    const HanderSold=()=>{
        return data.quantitySold>=1000 ? ("Đã bán " + (data.quantitySold/1000).toFixed(1)+"k") : ("Đã bán " + data.sold + "")
    }

    const HanderRemain=()=>{
        return data.quantitySold>=1000 ? ("Còn " + (data.sold/1000).toFixed(1)+"k") : ("Còn " + data.sold + "")
    }

    const formattedAmount=(item)=>{
        if (item)
            return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        else
            return
    }

    // const 

    return (
        <View style={styles.container}>
            {/* {console.log(provincesAndCities.length)} */}
            <View style={{position: "relative"}}>
                <View style={{height: 160, width: 160, backgroundColor: '#E8EAED', borderRadius: 14 }}>
                    <View style={{ alignItems: "flex-end"}}>
                        <Image source={{uri:data.img}} style={{width: 160, height: 160, borderRadius: 14}}/>
                        {/* {
                        {
                            !saleLimit ? (
                                <View style={{backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', width: 45, height: 45, position: "absolute", borderRadius: 14}}>
                                    <Text style={{fontWeight: 500, color: 'white'}}>- 50%</Text>
                                </View>
                            ) : (
                                <View>
                                    
                                </View>
                            )
                        } */}
                    </View>
                    
                    

                    
                {/* <Image source={{uri:data.img}}></Image> */}
                </View>
            </View>
            
            

                {
                    data.priceReduced == null ? (
                        <View style={{padding: 5, flexDirection: 'row', alignItems: "center", width: '100%', paddingBottom: 0}}>
                            <Text style={{fontWeight: 600, fontSize: 16}} numberOfLines={1}>
                            {formattedAmount(data.price)}đ
                            </Text>
                        </View>
                    ) : (
                        <View style={{padding: 5, flexDirection: 'row', alignItems: "center", width: '100%', paddingBottom: 0}}>
                            <Text style={{fontWeight: 600, fontSize: 16}} numberOfLines={1}>
                                {formattedAmount(data.priceReduced)}đ
                            </Text>
                            <Text style={{fontWeight: 300, fontSize: 13, textDecorationLine: 'line-through', paddingLeft: 5}} numberOfLines={1}>
                                {formattedAmount(data.price)}
                            </Text>
                        </View>
                    )
                }
            <Text style={{fontSize: 16, fontWeight: 500, width: '100%', paddingHorizontal: 5}} numberOfLines={1}>{data.name}</Text>

            <Text style={{paddingHorizontal: 5, fontSize: 13, width: '100%'}} numberOfLines={3}>{data.description}</Text>

            <View style={{padding: 5, flexDirection: 'row', alignItems: "center", width: '100%', justifyContent: "space-between"}}>
                <TouchableOpacity style={{backgroundColor: '#45BC1B', borderRadius: 8}}>
                    <Text style={{color: 'white', padding: 5, fontSize: 12, height: 30}}>
                        {HanderSold()}
                    </Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={{backgroundColor: '#45BC1B', borderRadius: 8}}>
                    <View style={{alignItems: 'center', justifyContent: 'center', width: 30, height: 30}}>
                        <Zocial name="cart" size={18} color="white" style={{}}/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    width: 160,
    // height: 270,
    backgroundColor: '#F5FBF3',
    // backgroundColor: 'red',
    borderRadius: 12,
    
  },
});