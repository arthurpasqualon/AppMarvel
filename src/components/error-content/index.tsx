/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import LottieView from 'lottie-react-native';
import {SubTitle, Title} from './styles';
import strings from '../../locale/en-us';
import {ErrorContentProps} from '../../types';

function ErrorContent({condition}: ErrorContentProps) {
  const {ErrorContentStrings} = strings;
  return (
    <>
      {condition && (
        <>
          <LottieView
            source={require('assets/lottie/ovni.json')}
            style={{alignSelf: 'center', height: 400, width: '50%'}}
            autoPlay
            loop={false}
          />
          <Title>{ErrorContentStrings.title}</Title>
          <SubTitle>{ErrorContentStrings.subtitle}</SubTitle>
        </>
      )}
    </>
  );
}

export default ErrorContent;
