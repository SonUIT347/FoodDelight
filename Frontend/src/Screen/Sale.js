import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import PostSale from "../Component/PostSale";
import Search from "../Component/Search";
import No_Products from "../Component/No_Products";
import { Data } from "../../../App";
import useAuth from '../context/useAuth';
import axios from "axios";
import moment from "moment";

const Sale=()=>{
    const [dataFoodMains, setDataFoodMains] = useState([])
    const [dataFoodDesserts, setDataFoodDesserts] = useState([])
    const [dataFoodMains0, setDataFoodMains0] = useState([])
    const [dataFoodDesserts0, setDataFoodDesserts0] = useState([])
    const [clickedFilter, setClickedFilter] = useState([true, false, false, false, false])
    const [text, setText] = useState('')
    const [valuee1, setValuee1] = useState('')
    const [valuee2, setValuee2] = useState('')

    useEffect(()=>{
        getDataFoodDesserts_Sale()
        getDataFoodMains_Sale()
    }, [])

    const {
        ip
    } = useAuth()

    const getDataFoodMains_Sale = async () => {
        const now = moment();
        const day = now.format('YYYY-MM-DD');
        const time = now.format('HH:mm:ss');
        try {
            const response = await axios.get(`http://${ip}:8080/selectFoodMains_Sale/${day}/${time}`);
            const data = response.data;
            console.log(data)
            setDataFoodMains(data)
            setDataFoodMains0(data)
        } catch (error) {
            console.error('Error fetching data food mains', error.message);
        }
    };

    const getDataFoodDesserts_Sale = async () => {
        const now = moment();
        const day = now.format('YYYY-MM-DD');
        const time = now.format('HH:mm:ss');
        try {
            const response = await axios.get(`http://${ip}:8080/selectFoodDesserts_Sale/${day}/${time}`);
            const data = response.data;
            console.log(data)
            setDataFoodDesserts(data)
            setDataFoodDesserts0(data)
        } catch (error) {
            console.error('Error fetching data food mains', error.message);
        }
    };

    const HanderSearch=(text)=>{
        setText(text)
        const searchTextNormalized = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        const newDataSearch1 = dataFoodMains0.filter((item)=>((item.TenMA).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")).includes(searchTextNormalized))
        const newDataSearch2 = dataFoodDesserts0.filter((item)=>((item.TenMA).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")).includes(searchTextNormalized))
        if (clickedFilter[0] == true)
        {
            setDataFoodDesserts(newDataSearch2)
            setDataFoodMains(newDataSearch1)
        }
        else{
            const newDataFiltered1 = newDataSearch1.filter((item)=>(item.SoTienGiam/item.GiaTien*100 >= valuee1 && item.SoTienGiam/item.GiaTien*100 <= valuee2))
        // console.log(newDataFiltered1)
            const newDataFiltered2 = newDataSearch2.filter((item)=>(item.SoTienGiam/item.GiaTien*100 >= valuee1 && item.SoTienGiam/item.GiaTien*100 <= valuee2))

            setDataFoodDesserts(newDataFiltered2)
            setDataFoodMains(newDataFiltered1)
        }
        
    }

    const handerClickedFilter_TatCa=()=>{
        setClickedFilter([true, false, false, false, false])
        console.log(text)
        const searchTextNormalized = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        const newDataSearch1 = dataFoodMains0.filter((item)=>((item.TenMA).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")).includes(searchTextNormalized))
        const newDataSearch2 = dataFoodDesserts0.filter((item)=>((item.TenMA).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")).includes(searchTextNormalized))
        setDataFoodDesserts(newDataSearch2)
        setDataFoodMains(newDataSearch1)
    }

    const handerClickedFilter=(value1, value2)=>{
        setValuee1(value1)
        setValuee2(value2)
        if(value1 == 0)
            setClickedFilter([false, true, false, false, false])
        else
        {
            if(value1 == 26)
                setClickedFilter([false, false, true, false, false])
            else
            {
                if(value1 == 51)
                    setClickedFilter([false, false, false, true, false])
                else
                    setClickedFilter([false, false, false, false, true])
            }
        }
        const newDataFiltered1 = dataFoodDesserts0.filter((item)=>(item.SoTienGiam/item.GiaTien*100 >= value1 && item.SoTienGiam/item.GiaTien*100 <= value2))
        // console.log(newDataFiltered1)
        const newDataFiltered2 = dataFoodMains0.filter((item)=>(item.SoTienGiam/item.GiaTien*100 >= value1 && item.SoTienGiam/item.GiaTien*100 <= value2))

        const searchTextNormalized = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        const newDataSearch1 = newDataFiltered2.filter((item)=>((item.TenMA).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")).includes(searchTextNormalized))
        const newDataSearch2 = newDataFiltered1.filter((item)=>((item.TenMA).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")).includes(searchTextNormalized))
        setDataFoodDesserts(newDataSearch2)
        setDataFoodMains(newDataSearch1)
    }

    return(
        <View style={styles.container}>
            

            <View 
                style={{flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, height: 50,
                alignItems: 'center', width: '100%', }}
            >
                <AntDesign 
                    name="arrowleft" 
                    size={30} color="black" 
                    style={{backgroundColor: 'green', borderRadius: 20, width: 35, marginLeft: 20,
                    height: 35, textAlign: "center", textAlignVertical: 'center', position: "absolute"}}
                />
                <Text style={{fontSize: 20, fontWeight: 500, textAlign: 'center', width: '100%'}}>Giảm giá trong ngày</Text>
            </View>

            <View style={styles.filter}>
                {/* <TouchableOpacity>
                    
                </TouchableOpacity> */}
                <Ionicons 
                        name="md-filter" 
                        size={30} color="green" 
                        style={{textAlign: 'center', textAlignVertical: 'center', 
                        height: 50, width: 50, borderWidth: 1, borderRadius: 15, borderColor: 'green'}}
                    />

                <ScrollView  
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{marginLeft: 10}}
                >
                    <TouchableOpacity
                        onPress={()=>handerClickedFilter_TatCa()}
                        disabled={clickedFilter[0]}                    
                    >
                        <Text style={[styles.txtButton, {marginLeft: 0}, clickedFilter[0] && {backgroundColor: '#45BC1B', color: 'white'}]}>Tất cả</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=>handerClickedFilter(0, 25)}
                        disabled={clickedFilter[1]}
                    >
                        <Text style={[styles.txtButton, clickedFilter[1] && {backgroundColor: '#45BC1B', color: 'white'}]}>0-25%</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=>handerClickedFilter(26, 50)}
                        disabled={clickedFilter[2]}
                    >
                        <Text style={[styles.txtButton, clickedFilter[2] && {backgroundColor: '#45BC1B', color: 'white'}]}>26-50%</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=>handerClickedFilter(51, 75)}
                        disabled={clickedFilter[3]}
                    >
                        <Text style={[styles.txtButton, {marginRight: 0}, clickedFilter[3] && {backgroundColor: '#45BC1B', color: 'white'}]}>51-75%</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=>handerClickedFilter(76, 100)}
                        disabled={clickedFilter[4]}
                    >
                        <Text style={[styles.txtButton, {marginRight: 0}, clickedFilter[4] && {backgroundColor: '#45BC1B', color: 'white'}]}>51-75%</Text>
                    </TouchableOpacity>               
                </ScrollView>

                
            </View>

            <ScrollView 
                showsVerticalScrollIndicator={false}
            >
                <View style={{flexDirection: 'row', paddingHorizontal: 20, justifyContent: "space-between", alignItems: 'center', width: '100%', paddingVertical: 10}}>
                    <Text style={{fontSize: 20, fontWeight: 600}}>Món ăn chính</Text>
                    <AntDesign name="rightcircleo" size={30} color="black" />
                </View>

                { dataFoodMains.length == 0 ? (
                        <No_Products/>
                    ) : (
                        <View style={{flexWrap: "wrap", flexDirection: 'row', justifyContent: 'flex-start', marginBottom: -20}}>
                            {dataFoodMains.map((item, index) => (
                                <View key={index} style={{width: '50%', marginBottom: 20}}>
                                    <View style={{alignItems: 'center'}}>
                                        <PostSale data={item}/>
                                    </View>
                                    
                                </View>
                            ))}
                        </View>
                    )
                }
                <View style={{flexDirection: 'row', paddingHorizontal: 20, justifyContent: "space-between", alignItems: 'center', width: '100%', paddingVertical: 10}}>
                    <Text style={{fontSize: 20, fontWeight: 600}}>Món tráng miệng</Text>
                    <AntDesign name="rightcircleo" size={30} color="black" />
                </View>

                { dataFoodDesserts.length == 0 ? (
                        <No_Products/>
                    ) : (
                        <View style={{flexWrap: "wrap", flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 0}}>
                            {dataFoodDesserts.map((item, index) => (
                                <View key={index} style={{width: '50%', marginBottom: 20}}>
                                    <View style={{alignItems: 'center'}}>
                                        <PostSale data={item}/>
                                    </View>
                                    
                                </View>
                            ))}
                        </View>
                    )
                }


            </ScrollView>

            <View style={{width: '100%', marginTop: 55, backgroundColor: 'white', position: 'absolute', zIndex: 1}}>
                <Search
                    valueSearch={HanderSearch}
                />
            </View>
        </View>
        
    )

}

export default Sale

const styles=StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        marginTop: Platform.OS === 'android' ? 30 : 0,
        // backgroundColor: 'red',
        // justifyContent: 'center',
        // alignItems: 'center',
    },

    filter: {
        // backgroundColor: 'gray',
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 70,
        marginBottom: 10,
        // alignSelf: "center",
        height: 50,
        justifyContent: 'center',
        // textAlign: 'center',
    },
    txtButton:{
        padding: 10,
        height: 50,
        textAlignVertical: 'center',
        borderWidth: 1,
        borderRadius: 15,
        marginHorizontal: 5,
        color: 'gray',
        borderColor: 'green',
    }
});

