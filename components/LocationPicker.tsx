import { View, Text, StyleSheet, Button, Alert, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../constants/colors';
import * as Location from 'expo-location';

// تعریف نوع برای موقعیت
type LocationType = {
  lat: number;
  lng: number;
} | null;

const LocationPicker = () => {
  const [location, setLocation] = useState<LocationType>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // دریافت موقعیت
  const getLocationHandler = async () => {
    setIsLoading(true);
    setErrorMsg(null);

    try {
      // 1. درخواست مجوز
      const { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status !== 'granted') {
        Alert.alert('نیاز به مجوز', 'لطفاً دسترسی به موقعیت را فعال کنید');
        setErrorMsg('دسترسی به موقعیت رد شد');
        setIsLoading(false);
        return;
      }

      // 2. دریافت موقعیت
      const currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });
      setLocation({
        lat: currentLocation.coords.latitude,
        lng: currentLocation.coords.longitude,
      });

    } catch (error) {
      Alert.alert('خطا', 'مشکلی در دریافت موقعیت پیش آمد');
      setErrorMsg('خطا در دریافت موقعیت');
    } finally {
      setIsLoading(false);
    }
  };

  // نمایش موقعیت
  const getMapLocationHandler = () => {
    if (location) {
      Alert.alert(
        'موقعیت شما',
        `عرض: ${location.lat}\nطول: ${location.lng}`
      );
    } else {
      Alert.alert('توجه', 'ابتدا موقعیت خود را دریافت کنید');
    }
  };

  return (
    <View>
      {/* باکس نمایش موقعیت */}
      <View style={styles.locationContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={Colors.text} />
        ) : location ? (
          <View>
            <Text style={styles.textWhite}>📍 موقعیت دریافت شد</Text>
            <Text style={styles.textWhite}>
              عرض: {location.lat.toFixed(4)}
            </Text>
            <Text style={styles.textWhite}>
              طول: {location.lng.toFixed(4)}
            </Text>
          </View>
        ) : errorMsg ? (
          <Text style={styles.textError}>{errorMsg}</Text>
        ) : (
          <Text style={styles.textWhite}>📍 موقعیتی دریافت نشده است</Text>
        )}
      </View>

      {/* دکمه‌ها */}
      <View style={styles.buttonWrapper}>
        <Button 
          title={isLoading ? 'در حال دریافت...' : '📍 دریافت موقعیت'} 
          onPress={getLocationHandler}
          disabled={isLoading}
        />
        <Button 
          title='🗺️ نمایش روی نقشه' 
          onPress={getMapLocationHandler}
          disabled={!location}
        />
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  locationContainer: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginVertical: 10,
    backgroundColor: Colors.primary,
    padding: 16,
  },
  textWhite: {
    color: Colors.text,
    fontSize: 16,
    textAlign: 'center',
  },
  textError: {
    color: '#ff6b6b',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonWrapper: {
    gap: 8,
  },
});