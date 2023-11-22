import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Keyboard, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
// import { ScrollView } from 'react-native-web';


const Search = ({valueSearch}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [clickedHistory, setClickedHistory] = useState(false);

  const [dataSearch, setDataSearch] = useState([]);

  const allData = [
    'An Giang',
    'Bà Rịa-Vũng Tàu',
    'Bạc Liêu',
    'Bắc Kạn',
    'Bắc Giang',
    'Bắc Ninh',
    'Bến Tre',
    'Bình Dương',
    'Bình Định',
    'Bình Phước',
    'Bình Thuận',
    'Cà Mau',
    'Cao Bằng',
    'Cần Thơ (TP)',
    // ... (Thêm các tỉnh và thành phố khác)
    'Yên Bái',
  ];

  useEffect(() => {
    // Lọc dữ liệu dựa trên điều kiện tìm kiếm
    const filtered = allData.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [dataSearch]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item}</Text>
    </View>
  );

  const HanderOnChangeText=(text)=>{
    setSearchTerm(text)
  };

  const HanderOnSubmitEditing=()=>{
    setClickedHistory(false)
    if (searchTerm != "")
    {
      if (dataSearch.includes(searchTerm))
      {
        const newDataSearch = [searchTerm, ...(dataSearch.filter((item)=>item!=searchTerm))]
        setDataSearch(newDataSearch)
      }
      else
        if(dataSearch.length < 3)
        {
            const newDataSearch = [searchTerm, ...dataSearch]
            setDataSearch(newDataSearch)
            // console.log(dataSearch)
        }
        else
        {
            const newDataSearch = [searchTerm, ...(dataSearch.slice(0, dataSearch.length - 1))]
            setDataSearch(newDataSearch)
            // console.log(searchTerm)
        }
      valueSearch(searchTerm)
    }     
    else
      valueSearch(searchTerm)

  };

  const HanderOnChangeTextItem=(text) => {
    setSearchTerm(text)
    valueSearch(searchTerm)
    // HanderOnSubmitEditing()
  }


  return (
    <View style={styles.container}>
        <View style={{height: 50, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 15, padding: 5, paddingHorizontal: 10, backgroundColor: 'white'}}>
            <Ionicons name="md-search" size={30} color="black" onPress={()=>{Keyboard.dismiss(), HanderOnSubmitEditing()}} />
            <TextInput
                style={styles.searchInput}
                numberOfLines={1}
                placeholder="Tìm kiếm"
                onChangeText={(text) => HanderOnChangeText(text)}
                onSubmitEditing={()=>HanderOnSubmitEditing()}
                value={searchTerm}
                onFocus={()=>setClickedHistory(true)}
            />
            <MaterialIcons name="cancel" size={24} color="black" onPress={()=>{setSearchTerm("")}}/>
        </View>
        
        <View style={{width: '100%'}}>
              {
                clickedHistory ? (
                  dataSearch.map((item, index)=>(
                    <View key={index}>
                      <Text
                        style={{height: 50, textAlignVertical: 'center', paddingHorizontal: 20, borderRadius: 15, backgroundColor: '#E8EAED', marginVertical: 1}} 
                        numberOfLines={1}
                        onPress={()=>HanderOnChangeTextItem(item)}
                      >
                        {console.log(dataSearch)}
                        {item}
                      </Text>
                    </View>
                  ))
                ):(
                  <View></View>
                )
              }

        </View>

        

        {/* <FlatList
                style = {{}}
                data={filteredData}
                // horizontal={true}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            /> */}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    width: '100%',
    // height: 500,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
  },
  searchInput: {
    flex: 1,
    borderColor: 'gray',    
    padding: 5,
    borderRadius: 15,
  },
});

export default Search