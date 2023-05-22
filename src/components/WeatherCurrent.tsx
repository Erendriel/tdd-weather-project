import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import LocationService from '../service/LocationService';
import Button from './Button';

function WeatherCurrent() {
  const navigation = useNavigation();

  const handleFetchWeather = useCallback(async () => {
    const position = await LocationService.getCurrentPosition();
    navigation.navigate('Weather', position);
  }, [navigation]);
  return (
    <Button testID="weather-current" label="" onPress={handleFetchWeather} />
  );
}

export default WeatherCurrent;
