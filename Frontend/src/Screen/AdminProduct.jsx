
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import useAuth from '../context/useAuth';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    height: 150,
    // width: '100%',
    borderWidth: 1,
    margin: 10,
    borderRadius: 16,
  },
  image: {
    height: 130,
    width: 130,
    borderRadius:16,
    margin:5,
    marginLeft: 10
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: 100,
    marginLeft: 5,
    marginRight: 10,
    flex: 1,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    // flex: 1,
    // backgroundColor: 'red',
    marginBottom: 5
  },
  buttonsContainer: {
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    // marginTop: 60,
    width: '100%',
    // backgroundColor: 'green',
    justifyContent: 'space-evenly',
    marginRight: 15,
  },
  acceptButton: {
    backgroundColor: '#4ECB71',
    padding: 3,
    borderRadius: 6,
    marginRight: 15,
  },
  rejectButton: {
    backgroundColor: '#F80C0C',
    padding: 3,
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
});

// Component Item
const Item = ({ item, handleAccept, handleDeny }) => (
  <View style={styles.container}>
   <Image style={styles.image} source={{ uri: item.image }} />
    <View style={styles.textContainer}>
      <Text style={styles.itemName} numberOfLines={1}>{item.tenma}</Text>
      <Text style={{marginBottom: 5}}>Giá: {item.GiaTien}</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.acceptButton} onPress={() => handleAccept(item.mama)}>
          <Text style={styles.buttonText}>Chấp nhận</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rejectButton} onPress={() => handleDeny(item.mama)}>
          <Text style={styles.buttonText}>Từ chối</Text>
        </TouchableOpacity>
      </View>
    </View>


  </View>
);

// Component AdminProduct
const AdminProduct = () => {
  const [food, setFood] = useState([]);
  const { ip, username } = useAuth();

  useEffect(() => {
    getFoodPending();
  }, []);

  // getUserId/:username
  // const macb = 'KH0003';

  // const getUserId = async () => {
  //   try {
  //     const response = await axios.get(`http://${ip}:8080/foodpending/${macb}`);
  //     setFood(response.data);
  //   } catch (error) {
  //     console.error('Error fetching food pending:', error);
  //   }
  // };


  const getFoodPending = async () => {
    try {
      const response = await axios.get(`http://${ip}:8080/allfoodpending`);
      setFood(response.data);
    } catch (error) {
      console.error('Error fetching food pending:', error);
    }
  };

  const handleAccept = async (monan_id) => {
    try {
      await axios.put(`http://${ip}:8080/update/accept/foodpending/${monan_id}`);
      getFoodPending();
    } catch (error) {
      console.error('Error accepting food:', error);
    }
  };
  
  const handleDeny = async (monan_id) => {
    try {
      await axios.put(`http://${ip}:8080/update/deny/foodpending/${monan_id}`);
      getFoodPending();
    } catch (error) {
      console.error('Error denying food:', error);
    }
  };

  return <FlatList
    data={food}
    keyExtractor={item => item.mama}
    renderItem={({ item }) => <Item item={item} handleAccept={handleAccept} handleDeny={handleDeny} />} />;
};

export default AdminProduct;
