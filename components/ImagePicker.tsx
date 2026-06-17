import { useState } from 'react';
import { View, Image, Button, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImagePickerComponent = () => {
  const [image, setImage] = useState<string | null>(null);

  // انتخاب عکس از گالری
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert('نیاز به مجوز', 'برای دسترسی به گالری نیاز به مجوز دارید');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'], // یا ['images', 'videos']
    //   allowsEditing: true, // امکان برش و ویرایش
      aspect: [4, 3], // نسبت ابعاد برای برش
      quality: 0.8, // کیفیت تصویر (0 تا 1)
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    } else {
      Alert.alert('لغو شد', 'هیچ تصویری انتخاب نشد');
    }
  };

  // گرفتن عکس با دوربین
  const takePhoto = async () => {
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
    if (!cameraPermission.granted) {
      Alert.alert('نیاز به مجوز', 'برای استفاده از دوربین نیاز به مجوز دارید');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      {image && (
        <Image source={{ uri: image }} style={styles.image} />
      )}

      <View style={styles.buttonContainer}>
        <Button title="انتخاب از گالری" onPress={pickImage} />
        <Button title="گرفتن با دوربین" onPress={takePhoto} />
        {image && (
          <Button title="حذف عکس" onPress={() => setImage(null)} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    gap: 10,
    width: '100%',
  },
});

export default ImagePickerComponent;