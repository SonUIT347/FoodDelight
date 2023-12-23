import { View, Text } from 'react-native'
import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
export const authContext = createContext()
const AuthContext = ({ children }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userCount, setUserCount] = useState(null);
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
        // Check if the array is empty or has no items
        if (arr.length === 0) {
          return null;
        }
        // Sort the array in ascending order
        arr.sort((a, b) => a - b);
        // Check the first element
        if (arr[0] !== 1) {
          return 1; // The missing value is 1
        }
        // Check for gaps in the sequence
        for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i] + 1 !== arr[i + 1]) {
            // If there is a gap, return the missing value
            return arr[i] + 1;
          }
        }
        // If no missing value is found, return the next value in the sequence
        return arr[arr.length - 1] + 1;
      }
      
    const getUserCount = () => {
        axios.get('http://192.168.1.30:8080/usercount').then(response =>{
            setUserCount(response.data.userCount);
        })
        .catch(err => {
            console.log(err)
        })
    }
    const value = {
        username,
        password,
        setUsername,
        setPassword,
        userCount,
        getUserCount,
        findMissingValue
    }
    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    )
}

export default AuthContext