import react from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView,  } from "react-native";
import { useState, useEffect } from "react";
// import { AntDesign } from '@expo/vector-icons';
import Home_Address from "../Component/Home_Address";
import Search from "../Component/Search";
import { AntDesign } from '@expo/vector-icons';
import ShortPost from "../Component/ShortPost";

const data=[
    {
        img: 'https://file.hstatic.net/200000385717/article/com_ga_xoi_mooo_595935f004c64a898650dc9363b49785.jpg',
        name: 'Cơm gà xối mỡ',
        price: 20000,
        sold: 210
    },
    {
        img: 'https://file.hstatic.net/200000385717/article/com_ga_xoi_mooo_595935f004c64a898650dc9363b49785.jpg',
        name: 'Cơm gà thái lan',
        price: 20000,
        sold: 210
    },
    {
        img: 'https://file.hstatic.net/200000385717/article/com_ga_xoi_mooo_595935f004c64a898650dc9363b49785.jpg',
        name: 'Cơm thịt kho trứng',
        price: 20000,
        sold: 210
    },


]



const Home = () => {

    const handleValueProvince = () => {

    }

    const handleValueIndex = () => {
        
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={{position: "absolute", width: '100%', zIndex: 1, backgroundColor: '#F5F5F5', marginTop: 60}}>
                {/* <Search/> */}
            </View>
            <View style={{justifyContent: "flex-end"}}>
                <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', alignSelf: "flex-end", backgroundColor: 'white'}}>
                        <Home_Address valueProvince={handleValueProvince} valueIndex={handleValueIndex}/>
                </View>
                <ScrollView horizontal={false} style={{marginTop: 60}}>
                    <View style={{flexDirection: 'row', paddingHorizontal: 20, justifyContent: "space-between", alignItems: 'center'}}>
                        <Text style={{fontSize: 20, fontWeight: 600}}>Món ăn chính</Text>
                        <AntDesign name="rightcircleo" size={30} color="black" />
                    </View>
                    <ScrollView 
                        style={{marginHorizontal: 20, paddingVertical: 10}}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {/* {data} */}
                        {data.map((item, index)=>(
                            <View
                                key = {index} 
                                style={[{paddingHorizontal: 5}, index==0 && {paddingLeft: 0}, index==data.length-1 && {paddingRight: 0}]}
                            >
                                <ShortPost data={item}/>
                            </View>
                        ))}
                        
                    </ScrollView>

                    <TouchableOpacity style={{flexDirection: 'row', paddingHorizontal: 20, justifyContent: "space-between", alignItems: 'center'}}>
                        <Text style={{fontSize: 20, fontWeight: 600}}>Đang Sale</Text>
                        <AntDesign name="rightcircleo" size={30} color="black" />
                    </TouchableOpacity>

                    <ScrollView 
                        style={{marginHorizontal: 20, paddingVertical: 10}}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {data.map((item, index)=>(
                            <View
                                key = {index} 
                                style={[{paddingHorizontal: 5}, index==0 && {paddingLeft: 0}, index==data.length-1 && {paddingRight: 0}]}
                            >
                                <ShortPost data={item}/>
                            </View>
                        ))}
                    </ScrollView>
                    <View style={{flexDirection: 'row', paddingHorizontal: 20, justifyContent: "space-between", alignItems: 'center'}}>
                        <Text style={{fontSize: 20, fontWeight: 600}}>Món Tráng Miệng</Text>
                        <AntDesign name="rightcircleo" size={30} color="black" />
                    </View>
                    <ScrollView 
                        style={{marginHorizontal: 20, paddingVertical: 10}}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {data.map((item, index)=>(
                            <View
                                key = {index} 
                                style={[{paddingHorizontal: 5}, index==0 && {paddingLeft: 0}, index==data.length-1 && {paddingRight: 0}]}
                            >
                                <ShortPost data={item}/>
                            </View>
                        ))}
                    </ScrollView>
                </ScrollView>
            </View>
            
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    width: '100%',
    marginTop: Platform.OS === 'android' ? 30 : 0,
    // height: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#F5FBF3',
    // backgroundColor: 'red',
    // borderRadius: 12,
    
  },
});