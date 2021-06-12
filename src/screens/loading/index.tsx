/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import {Text, View} from 'react-native';
import Fonts from '../../resources/Fonts';
import useRequest from '../../hooks/useRequest';
import {useNavigation} from '@react-navigation/core';
import ErrorContent from '../../components/error-content';
import {useDispatch, useSelector} from 'react-redux';
import {setDefaultSearch} from '../../store/defaultSearch';
import colors from '../../resources/Colors';
import strings from '../../locale/en-us';
import {api, auth} from '../../services/api';

// import { Container } from './styles';

function LoadingScreen() {
  const characterId = useSelector((state: any) => state.character.id);
  const url = `${api}characters?&limit=100&${auth}`;
  const {data, error, loading} = useRequest({url});
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const {LoadingStrings} = strings;
  useEffect(() => {
    if (!error && !loading && data) {
      dispatch(setDefaultSearch({data}));
      characterId ? navigate('Home') : navigate('SelectCharacter', {data});
    }
  }, [loading, data, error]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.secondary,
        justifyContent: 'center',
      }}>
      {!loading && error ? (
        <ErrorContent condition={error} />
      ) : (
        <>
          <Text
            style={{
              fontFamily: Fonts.bold,
              textAlign: 'center',
              marginHorizontal: 20,
              color: colors.white,
              fontSize: 32,
            }}>
            {LoadingStrings.title}
          </Text>
          <Text
            style={{
              fontFamily: Fonts.bold,
              textAlign: 'center',
              marginHorizontal: 20,
              marginVertical: 10,
              color: colors.white,
              fontSize: 22,
            }}>
            {LoadingStrings.description}
          </Text>
          <LottieView
            source={require('assets/lottie/dynamite.json')}
            style={{alignSelf: 'center', height: 400, width: '50%'}}
            autoPlay
            loop
          />
        </>
      )}
    </View>
  );
}

export default LoadingScreen;
