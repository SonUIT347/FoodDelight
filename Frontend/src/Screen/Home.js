import react from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView,  } from "react-native";
import { useState, useEffect } from "react";
// import { AntDesign } from '@expo/vector-icons';
import Home_Address from "../Component/Home_Address";
import Search from "../Component/Search";
import { AntDesign } from '@expo/vector-icons';
import ShortPost from "../Component/ShortPost";
import No_Products from "../Component/No_Products";
import { Data } from "../../../App";
import useAuth from "../context/useAuth";
import axios from "axios";
import moment from "moment";



const Home = () => {
    const [dataDesserts, setDataDesserts] = useState([])
    const [dataMainDishes, setDataMainDishes] = useState([])
    const [dataSale, setDataSale] = useState([])
    const [dataDesserts0, setDataDesserts0] = useState([])
    const [dataMainDishes0, setDataMainDishes0] = useState([])
    const [dataSale0, setDataSale0] = useState([])
    const [province, setProvince] = useState('')
    const [txtSeacrh, setTxtSearch] = useState('')

    const {
        ip
    } = useAuth()

    useEffect(() => {
        console.log(ip)
        getDataFoodMain()
        getDataFoodDesserts()
        getDataFoodSales()
    }, []);

    useEffect(() => {
        HanderFilterSearch()
        // const newDataSearch1 = dataMainDishes.filter((item)=>((item.Tinh)==province))
        // const newDataSearch2 = dataSale.filter((item)=>((item.Tinh).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")).includes(province))
        // const newDataSearch3 = dataDesserts.filter((item)=>((item.Tinh).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")).includes(province))
        // setDataMainDishes(newDataSearch1)
        // setDataSale(newDataSearch2)
        // setDataDesserts(newDataSearch3)
        console.log(province + "abc")
    }, [province]);

    const getDataFoodMain = async () => {
        const now = moment();
        const day = now.format('YYYY-MM-DD');
        const time = now.format('HH:mm:ss');
        try {
            const response = await axios.get(`http://${ip}:8080/selectFoodMains/${day}/${time}`);
            const data = response.data;
            console.log(data)
            setDataMainDishes(data)
            setDataMainDishes0(data)
        } catch (error) {
            console.error('Error fetching data food mains', error.message);
        }
    };

    const getDataFoodDesserts = async () => {
        try {
            const response = await axios.get(`http://${ip}:8080/selectFoodDesserts`);
            const data = response.data;
            // console.log(data)
            setDataDesserts(data)
            setDataDesserts0(data)
        } catch (error) {
            console.error('Error fetching data food mains', error.message);
        }
    };

    const getDataFoodSales = async () => {
        try {
            const response = await axios.get(`http://${ip}:8080/selectFoodSales`);
            const data = response.data;
            // console.log(data)
            setDataSale(data)
            setDataSale0(data)
        } catch (error) {
            console.error('Error fetching data food mains', error.message);
        }
    };
    
    const handleValueProvince=(valueProvince)=>{
        setProvince(valueProvince)
    }

    const handleValueIndex = () => {
        
    }
    
    function HanderFilterSearch() {
        const searchTextNormalized = txtSeacrh.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        const newDataSearch1 = dataMainDishes0.filter((item)=>((item.TenMA).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")).includes(searchTextNormalized))
        const newDataSearch2 = dataSale0.filter((item)=>((item.TenMA).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")).includes(searchTextNormalized))
        const newDataSearch3 = dataDesserts0.filter((item)=>((item.TenMA).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")).includes(searchTextNormalized))
        const newDataSearch01 = newDataSearch1.filter((item)=>((item.Tinh)==province))
        const newDataSearch02 = newDataSearch2.filter((item)=>((item.Tinh).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")).includes(province))
        const newDataSearch03 = newDataSearch3.filter((item)=>((item.Tinh).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")).includes(province))
        setDataMainDishes(newDataSearch01)
        setDataSale(newDataSearch02)
        setDataDesserts(newDataSearch03)
    }

    const HanderSearch=(text)=>{
        const searchTextNormalized = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        const newDataSearch1 = dataMainDishes0.filter((item)=>((item.TenMA).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")).includes(searchTextNormalized))
        const newDataSearch2 = dataSale0.filter((item)=>((item.TenMA).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")).includes(searchTextNormalized))
        const newDataSearch3 = dataDesserts0.filter((item)=>((item.TenMA).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")).includes(searchTextNormalized))
        const newDataSearch01 = newDataSearch1.filter((item)=>((item.Tinh)==province))
        const newDataSearch02 = newDataSearch2.filter((item)=>((item.Tinh).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")).includes(province))
        const newDataSearch03 = newDataSearch3.filter((item)=>((item.Tinh).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")).includes(province))
        setDataMainDishes(newDataSearch01)
        setDataSale(newDataSearch02)
        setDataDesserts(newDataSearch03)
        setTxtSearch(text)
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
                    <TouchableOpacity style={{flexDirection: 'row', paddingHorizontal: 20, justifyContent: "space-between", alignItems: 'center'}}>
                        <Text style={{fontSize: 20, fontWeight: 600}}>Món Ăn Chính</Text>
                        <AntDesign name="rightcircleo" size={30} color="black" />
                    </TouchableOpacity>

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
                                        style={[{paddingHorizontal: 5}, index==0 && {paddingLeft: 0}, index==dataMainDishes.length-1 && {paddingRight: 0}]}
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
                                        style={[{paddingHorizontal: 5}, index==0 && {paddingLeft: 0}, index==dataSale.length-1 && {paddingRight: 0}]}
                                    >
                                        <ShortPost data={item}/>
                                    </View>
                                ))}                                
                            </ScrollView>
                        )
                    }
                    <TouchableOpacity style={{flexDirection: 'row', paddingHorizontal: 20, justifyContent: "space-between", alignItems: 'center'}}>
                        <Text style={{fontSize: 20, fontWeight: 600}}>Món Tráng Miệng</Text>
                        <AntDesign name="rightcircleo" size={30} color="black" />
                    </TouchableOpacity>
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
                                        style={[{paddingHorizontal: 5}, index==0 && {paddingLeft: 0}, index==dataDesserts.length-1 && {paddingRight: 0}]}
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