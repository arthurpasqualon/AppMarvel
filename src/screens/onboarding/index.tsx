import React from 'react';
import Button from '../../components/button';
import {markAsShown} from '../../store/onboarding';
import {useDispatch} from 'react-redux';
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

function Onboarding() {
  const bg = require('assets/images/bg.png');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {OnboardingStrings} = strings;

  const onPress = () => {
    dispatch(markAsShown());
    navigation.navigate('Loading');
  };

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
