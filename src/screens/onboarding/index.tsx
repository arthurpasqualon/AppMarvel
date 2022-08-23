import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';

import Button from '../../components/button';

import {markAsShown} from '../../store/onboarding';

import strings from '../../locale/en-us';

import {
  ItemContainer,
  Title,
  Description,
  ContentContainer,
  ImageBackground,
  Container,
  ButtonContainer,
} from './styles';
import {useNavigation} from '@react-navigation/core';
import theme from './theme';
import useLocation from '../../hooks/useLocation';
import {RootStackScreenProps} from '../../routes/types';

function Onboarding() {
  const bg = require('assets/images/bg.png');
  const dispatch = useDispatch();
  const {navigate} = useNavigation<RootStackScreenProps>();
  const {OnboardingStrings} = strings;

  const onPress = useCallback(() => {
    dispatch(markAsShown());
    navigate('SELECT_CHARACTER');
  }, [dispatch, navigate]);

  useLocation();

  return (
    <Container>
      <ImageBackground source={bg}>
        <ItemContainer>
          <ContentContainer>
            <Title>{OnboardingStrings.title}</Title>
            <Description>{OnboardingStrings.description}</Description>
          </ContentContainer>
          <ButtonContainer>
            <Button
              labelText={OnboardingStrings.nextButton}
              onPress={onPress}
              theme={theme.button}
            />
          </ButtonContainer>
        </ItemContainer>
      </ImageBackground>
    </Container>
  );
}

export default Onboarding;
