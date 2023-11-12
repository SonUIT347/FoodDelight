import React, { useState } from 'react';
import { View, Button, Image, ScrollView } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

const ImagePickerComponent = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const pickImages = () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 5, // Set the number of images allowed to be picked
      },
      (response) => {
        if (!response.didCancel) {
          setSelectedImages(response.assets);
        }
      }
    );
  };

  return (
    <View>
      <Button title="Pick Images" onPress={pickImages} />
      <ScrollView horizontal>
        {selectedImages.map((image) => (
          <Image
            key={image.uri}
            source={{ uri: image.uri }}
            style={{ width: 100, height: 100, margin: 5 }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ImagePickerComponent;
