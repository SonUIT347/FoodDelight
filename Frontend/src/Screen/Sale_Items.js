import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import PostSale from "../Component/PostSale";
import Search from "../Component/Search";
import No_Products from "../Component/No_Products";

const Sale_Items=({dataItem, header})=>{
    const [data, setData] = useState(dataItem)
    const [clickedFilter, setClickedFilter] = useState([true, false, false, false, false])

    const HanderSearch=(text)=>{
        const searchTextNormalized = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

        const newDataSearch = dataItem.filter((item)=>((item.name).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")).includes(searchTextNormalized))
        setData(newDataSearch)
    }

    const handerClickedFilter_TatCa=()=>{
        setClickedFilter([true, false, false, false, false])
        setData([dataItem])
    }

    const handerClickedFilter=(value1, value2)=>{
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

        const newDataFiltered = dataItem.filter((item)=>((item.price-item.priceReduced)/item.price*100 >= value1 && (item.price-item.priceReduced)/item.price*100 <= value2))
        console.log(data)
        // console.log(newDataFiltered1)
        setData(newDataFiltered)
    }

    return(
        <View style={styles.container}>
            <View style={{position: 'absolute', width: '100%', marginTop: 85, backgroundColor: '#F5F5F5', zIndex: 1}}>
                <Search
                    valueSearch={HanderSearch}
                />
            </View>

            <View 
                style={{flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, height: 85,
                alignItems: 'center', width: '100%', }}
            >
                <AntDesign 
                    name="arrowleft" 
                    size={30} color="black" 
                    style={{backgroundColor: 'green', borderRadius: 20, width: 35, marginLeft: 20,
                    height: 35, textAlign: "center", textAlignVertical: 'center', position: "absolute"}}
                />
                <View style={{width: '100%'}}>
                    <Text style={{fontSize: 20, fontWeight: 500, textAlign: 'center', width: '100%'}}>{header}</Text>
                    <Text style={{fontSize: 20, fontWeight: 500, textAlign: 'center', width: '100%'}}>giảm giá trong ngày</Text>
                </View>

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
                style={{marginTop: 10}}
            >
                { data.length == 0 ? (
                        <No_Products/>
                    ) : (
                        <View style={{flexWrap: "wrap", flexDirection: 'row', justifyContent: 'flex-start'}}>
                            {data.map((item, index) => (
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
        </View>
        
    )

}

export default Sale_Items

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

