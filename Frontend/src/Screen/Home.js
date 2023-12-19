import react from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView,  } from "react-native";
import { useState, useEffect } from "react";
// import { AntDesign } from '@expo/vector-icons';
import Home_Address from "../Component/Home_Address";
import Search from "../Component/Search";
import { AntDesign } from '@expo/vector-icons';
import ShortPost from "../Component/ShortPost";
import No_Products from "../Component/No_Products";
import { data } from "../../../App";


const Home = ({data_Desserts,data_MainDishes, data_Sale}) => {
    const [dataDesserts, setDataDesserts] = useState(data)
    const [dataMainDishes, setDataMainDishes] = useState(data)
    const [dataSale, setDataSale] = useState(data)
    const handleValueProvince = () => {

    }

    const handleValueIndex = () => {
        
    }

    const HanderSearch=(text)=>{
        const searchTextNormalized = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

        const newDataSearch1 = data_MainDishes.filter((item)=>((item.name).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")).includes(searchTextNormalized))
        const newDataSearch2 = data_Sale.filter((item)=>((item.name).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")).includes(searchTextNormalized))
        const newDataSearch3 = data_Desserts.filter((item)=>((item.name).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")).includes(searchTextNormalized))
        setDataMainDishes(newDataSearch1)
        setDataSale(newDataSearch2)
        setDataDesserts(newDataSearch3)
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

                    {
                        dataMainDishes.length == 0 ? (
                            <View style={{}}>
                                <No_Products/>
                                {/* <Text style={{width: '100%', flex: 1}}>fadfs</Text> */}
                            </View>
                            
                        ):(
                            <ScrollView 
                                style={{marginHorizontal: 20, paddingVertical: 10}}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                {dataMainDishes.map((item, index)=>(
                                    <View
                                        key = {index} 
                                        style={[{paddingHorizontal: 5}, index==0 && {paddingLeft: 0}, index==data.length-1 && {paddingRight: 0}]}
                                    >
                                        <ShortPost data={item}/>
                                    </View>
                                ))}                                
                            </ScrollView>
                        )
                    }

                    <TouchableOpacity style={{flexDirection: 'row', paddingHorizontal: 20, justifyContent: "space-between", alignItems: 'center'}}>
                        <Text style={{fontSize: 20, fontWeight: 600}}>Đang Sale</Text>
                        <AntDesign name="rightcircleo" size={30} color="black" />
                    </TouchableOpacity>

                    {
                        dataSale.length == 0 ? (
                            <View style={{}}>
                                <No_Products/>
                                {/* <Text style={{width: '100%', flex: 1}}>fadfs</Text> */}
                            </View>
                            
                        ):(
                            <ScrollView 
                                style={{marginHorizontal: 20, paddingVertical: 10}}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                {dataSale.map((item, index)=>(
                                    <View
                                        key = {index} 
                                        style={[{paddingHorizontal: 5}, index==0 && {paddingLeft: 0}, index==data.length-1 && {paddingRight: 0}]}
                                    >
                                        <ShortPost data={item}/>
                                    </View>
                                ))}                                
                            </ScrollView>
                        )
                    }
                    <View style={{flexDirection: 'row', paddingHorizontal: 20, justifyContent: "space-between", alignItems: 'center'}}>
                        <Text style={{fontSize: 20, fontWeight: 600}}>Món Tráng Miệng</Text>
                        <AntDesign name="rightcircleo" size={30} color="black" />
                    </View>
                    {
                        dataDesserts.length == 0 ? (
                            <View style={{}}>
                                <No_Products/>
                                {/* <Text style={{width: '100%', flex: 1}}>fadfs</Text> */}
                            </View>
                            
                        ):(
                            <ScrollView 
                                style={{marginHorizontal: 20, paddingVertical: 10}}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                {dataDesserts.map((item, index)=>(
                                    <View
                                        key = {index} 
                                        style={[{paddingHorizontal: 5}, index==0 && {paddingLeft: 0}, index==data.length-1 && {paddingRight: 0}]}
                                    >
                                        <ShortPost data={item}/>
                                    </View>
                                ))}                                
                            </ScrollView>
                        )
                    }
                </ScrollView>
            </View>

            <View style={{width: '100%', marginTop: 55, backgroundColor: 'white', position: 'absolute', zIndex: 1}}>
                <Search
                    valueSearch={HanderSearch}
                />
            </View>
            
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'green',
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