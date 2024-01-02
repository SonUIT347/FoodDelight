import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, Button } from 'react-native';

const images = [
  'https://file.hstatic.net/200000385717/article/com_ga_xoi_mooo_595935f004c64a898650dc9363b49785.jpg',
  // 'https://media.phunutoday.vn/files/upload_images/2016/01/21/cach-lam-banh-my-trung-ngon-1-phunutoday_vn.jpg',
  // 'https://inoxquanghuy.vn/wp-content/uploads/2022/12/hu-tieu-xuong-ngon.jpg',
  // Thêm đường dẫn hình ảnh khác nếu cần
];

const ImageStack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: images[currentIndex] }} style={styles.image} />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handlePrev} style={styles.button}>
          <Text style={styles.buttonText}>{'<'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNext} style={styles.button}>
          <Text style={styles.buttonText}>{'>'}</Text>
        </TouchableOpacity>
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
  image: {
    width: 300,
    height: 300,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ImageStack;