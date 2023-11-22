import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Post from "../Component/Post";
import Search from "../Component/Search";
import No_Products from "../Component/No_Products";


const Home_Items=({data, header})=>{

    const [dataItem, setDataItem] = useState(data)
    const [clickedFilter, setClickedFilter] = useState([true, false, false, false])

    const renderItem = ({ item }) => (
        <View style={{}}>
          <Post data={item}/>
        </View>
    );

    const HanderSearch=(text)=>{
        const searchTextNormalized = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

        const newDataSearch = data.filter((item)=>((item.name).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")).includes(searchTextNormalized))
        setDataItem(newDataSearch)
    }

    const handerClickedFilter_TatCa=()=>{
        setClickedFilter([true, false, false, false])
        setDataItem(data)
    }

    const handerClickedFilter_BanChay=()=>{
        setClickedFilter([false, true, false, false])
        if (header=="Món ăn chính")
        {
            setDataItem(data)
            // Data món ăn chính bán chạy
        }
        else
        {
            setDataItem(data)
            // Data món tráng miệng bán chạy
        }
    }

    const handerClickedFilter_ReNhat=()=>{
        setClickedFilter([false, false, true, false])
        if (header=="Món ăn chính")
        {
            setDataItem([])
            // Data món ăn chính bán chạy
        }
        else
        {
            setDataItem(data)
            // Data món tráng miệng bán chạy
        }
    }

    const handerClickedFilter_MacNhat=()=>{
        setClickedFilter([false, false, false, true])
        if (header=="Món ăn chính")
        {
            setDataItem(data)
            // Data món ăn chính bán chạy
        }
        else
        {
            setDataItem(data)
            // Data món tráng miệng bán chạy
        }
    }

    return (
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
                <Text style={{fontSize: 20, fontWeight: 500, textAlign: 'center', width: '100%'}}>{header}</Text>
            </View>

            {/* <View style={{width: '100%', height: 50, justifyContent: 'center'}}>
                <Text style={{paddingLeft: 20, fontSize: 16}}>Bạn đang tìm kiếm ""</Text>
            </View> */}

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
                        onPress={()=>handerClickedFilter_BanChay([false, true, false, false])}
                        disabled={clickedFilter[1]}
                    >
                        <Text style={[styles.txtButton, clickedFilter[1] && {backgroundColor: '#45BC1B', color: 'white'}]}>Bán chạy</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={()=>handerClickedFilter_ReNhat([false, false, true, false])}
                        disabled={clickedFilter[2]}
                    >
                        <Text style={[styles.txtButton, clickedFilter[2] && {backgroundColor: '#45BC1B', color: 'white'}]}>Rẻ nhất</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={()=>handerClickedFilter_MacNhat([false, false, false, true])}
                        disabled={clickedFilter[3]}
                    >
                        <Text style={[styles.txtButton, {marginRight: 0}, clickedFilter[3] && {backgroundColor: '#45BC1B', color: 'white'}]}>Đắt nhất</Text>
                    </TouchableOpacity>               
                </ScrollView>
            </View>

            {/* <ScrollView style={{backgroundColor: 'gray', width: '100%'}}>
                <Post data={data}/>
                <Post data={data}/>
            </ScrollView> */}
            {dataItem.length == 0 ? (
                <No_Products/>
            ) : (
                <FlatList
                    data={dataItem}
                    style={{width: '100%', marginBottom: -30}}
                    renderItem={(item) => renderItem(item)}
                    columnWrapperStyle={{flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        // backgroundColor: 'green',
                        paddingBottom: 40,
                        paddingHorizontal: 20}}
                    // keyExtractor={item => item.id}
                    numColumns={2}
                />
            )

            }
            
            <View style={{position: 'absolute', width: '100%', marginTop: 50, backgroundColor: '#dfdfdf'}}>
                <Search
                    valueSearch={HanderSearch}
                />
            </View>
            
        </View>
    );
};

export default Home_Items

const styles=StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        marginTop: Platform.OS === 'android' ? 30 : 0,
        // backgroundColor: 'red',
        // justifyContent: 'center',
        alignItems: 'center',
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

