import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.borderView}>
        <Text style={styles.overlayText}>Text đè lên</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderView: {
    width: 200,
    height: 100,
    borderWidth: 2,
    borderColor: 'black',
    position: 'relative',
  },
  overlayText: {
    backgroundColor: 'white',
    position: 'absolute',
    marginTop: -15,
    marginLeft: 10,
    top: 0,
    left: 0,
    zIndex: 1, // Đặt thứ bậc hiển thị để văn bản đè lên
  },
});

export default MyComponent;
