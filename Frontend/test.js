import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const YourComponent = () => {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    // Hàm updateDateTime sẽ được gọi mỗi giây
    const updateDateTime = () => {
      const currentDate = new Date();

      // Lấy giờ, phút, giây
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const seconds = currentDate.getSeconds();

      // Lấy ngày, tháng, năm
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0');

      // Định dạng thành chuỗi
      const formattedTime = `${hours}:${minutes}:${seconds}`;
      const formattedDate = `${year}-${month}-${day}`;

      // Gán giá trị vào state
      setCurrentDateTime(`${formattedDate} ${formattedTime}`);
    };

    // Gọi hàm updateDateTime mỗi giây
    const intervalId = setInterval(updateDateTime, 1000);

    // Hủy interval khi component bị hủy
    return () => clearInterval(intervalId);
  }, []); // useEffect sẽ chạy một lần sau khi component mount

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{currentDateTime}</Text>
    </View>
  );
};

export default YourComponent;


