import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Test = () => {
  return (
    <View style={styles.container}>
      {/* Các phần tử bình thường */}
      <Text>Phần tử 1</Text>
      <Text>Phần tử 2</Text>

      {/* View overlay với position: 'absolute' và không che phủ các phần tử khác */}
      <View style={styles.overlay}>
        <Text style={styles.overlayText}>Overlay Text</Text>
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
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray', // Một màu nền có độ trong suốt
    zIndex: 1, // Điều này quan trọng để đặt overlay trên cùng
  },
  overlayText: {
    color: 'white',
    fontSize: 20,
  },
});

export default Test;