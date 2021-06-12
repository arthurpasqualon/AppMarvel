/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import useLocation from '../../hooks/useLocation';
import {ButtonImage, ButtonContainer} from './styles';
import {useNavigation} from '@react-navigation/core';
import {mapsKey} from '../../services/api';
import useRequest from '../../hooks/useRequest';
import colors from '../../resources/Colors';
import strings from '../../locale/en-us';
import {Alert} from 'react-native';

function StoresMap() {
  const mapstyle = require('assets/maps/mapstyle.json');
  const initialRegion = useSelector((state: any) => state.location);
  const {top} = useSafeAreaInsets();
  const exit = require('assets/images/close.png');
  const navigation = useNavigation();

  const latlng = `location=${initialRegion?.latitude},${initialRegion?.longitude}`;
  const type = 'type=book_store';
  const radius = 'radius=15000';
  const query = `${type}&${radius}&${latlng}&key=${mapsKey}`;
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?${query}`;
  const {ErrorSpotsStrings} = strings;
  const {data, error} = useRequest({url});

  useEffect(() => {
    if (error) {
      Alert.alert(ErrorSpotsStrings.title, ErrorSpotsStrings.description);
    }
  }, [error]);

  useLocation();

  return (
    <>
      {initialRegion?.latitude && (
        <MapView
          style={{height: '100%', width: '100%'}}
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

export default StoresMap;
