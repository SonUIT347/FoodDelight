import { View, Text } from 'react-native'
import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
export const authContext = createContext()
const AuthContext = ({ children }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userCount, setUserCount] = useState(null);
    const [foodCount, setFoodCount] = useState(null);
    const ip = '192.168.1.23'
    // const [IdUser, setIdUser] = useState = (0)
    // useEffect(() => {
    //   axios.get('http://192.168.1.30:8080/usercount')
    //     .then(response => {
    //       setUserCount(response.data.userCount);
    //     })
    //     .catch(error => {
    //       console.error('Error fetching user count:', error.message);
    //     });
    // }, [IdUser]);
    function findMissingValue(arr) {
        if (arr.length === 0) {
          return null;
        }
        arr.sort((a, b) => a - b);
        if (arr[0] !== 1) {
          return 1;
        }
        for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i] + 1 !== arr[i + 1]) {
            return arr[i] + 1;
          }
        }
        return arr[arr.length - 1] + 1;
      }
      
    const getUserCount = () => {
        axios.get(`http://${ip}:8080/usercount`).then(response =>{
            setUserCount(response.data.userCount);
        })
        .catch(err => {
            console.log(err)
        })
    }
    const getFoodCount = () => {
      axios.get(`http://${ip}:8080/foodCount`).then(response => {
        setFoodCount(response.data.foodCount)
      })
    }

    const value = {
        username,
        password,
        setUsername,
        setPassword,
        userCount,
        getUserCount,
        findMissingValue,
        ip,
        getFoodCount,
        foodCount,
    }
    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    )
}

export default AuthContext