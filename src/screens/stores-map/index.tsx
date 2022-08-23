import React, {useEffect} from 'react';
import {Alert, StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import useSWR from 'swr';
import {useNavigation} from '@react-navigation/core';

import useLocation from '../../hooks/useLocation';

import {fetcher} from '../../services/fetcher';
import {mapsKey} from '../../services/api';

import colors from '../../resources/Colors';
import {ButtonImage, ButtonContainer} from './styles';
import strings from '../../locale/en-us';

const mapstyle = require('assets/maps/mapstyle.json');
const exit = require('assets/images/close.png');

function StoresMap() {
  const initialRegion = useSelector((state: any) => state.location);
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  const latlng = `location=${initialRegion?.latitude},${initialRegion?.longitude}`;
  const type = 'type=book_store';
  const radius = 'radius=15000';
  const query = `${type}&${radius}&${latlng}&key=${mapsKey}`;
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?${query}`;

  const {ErrorSpotsStrings} = strings;
  const {data, error} = useSWR(url, fetcher);

  useEffect(() => {
    if (error) {
      Alert.alert(ErrorSpotsStrings.title, ErrorSpotsStrings.description);
    }
  }, [ErrorSpotsStrings.description, ErrorSpotsStrings.title, error]);

  useLocation();

  return (
    <>
      {initialRegion?.latitude && (
        <MapView
          style={styles.map}
          customMapStyle={mapstyle}
          showsUserLocation
          showsPointsOfInterest
          initialRegion={initialRegion}
          toolbarEnabled={false}
          loadingBackgroundColor="#151515"
          provider={PROVIDER_GOOGLE}>
          {data?.results?.length &&
            data?.results.map((item: any) => {
              return (
                <Marker
                  key={item?.place_id}
                  pinColor={colors.primary}
                  coordinate={{
                    latitude: item?.geometry?.location?.lat,
                    longitude: item?.geometry?.location?.lng,
                  }}
                />
              );
            })}
        </MapView>
      )}
      <ButtonContainer
        onPress={() => {
          navigation.goBack();
        }}
        style={{top: top + 15}}>
        <ButtonImage source={exit} />
      </ButtonContainer>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%',
  },
});
export default StoresMap;
