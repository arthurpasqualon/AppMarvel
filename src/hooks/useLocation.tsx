/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';

import {setLocation} from '../store/location';

function useLocation() {
  const dispatch = useDispatch();

  useEffect(() => {
    retrieveLocation();
    async function retrieveLocation() {
      await Geolocation.getCurrentPosition(
        ({coords}) => {
          dispatch(
            setLocation({
              ...coords,
              latitudeDelta: 0.0022,
              longitudeDelta: 0.0022,
            }),
          );
        },
        err => {
          console.log(err);
        },
        {timeout: 10000},
      );
    }
  }, []);
}

export default useLocation;
