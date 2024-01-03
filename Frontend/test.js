import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';

const YourComponent = () => {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    // Sử dụng moment để lấy thời gian và ngày hiện tại
    const now = moment();
    const formattedDateTime = now.format('YYYY-MM-DD HH:mm:ss');

    setCurrentDateTime(formattedDateTime);

    // Bạn có thể sử dụng các hàm khác của moment để định dạng theo nhu cầu
    // Ví dụ: now.format('MMMM Do YYYY, h:mm:ss a');
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{currentDateTime}</Text>
    </View>
  );
};

export default YourComponent;