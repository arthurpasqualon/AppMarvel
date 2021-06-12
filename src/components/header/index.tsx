import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Container, Image, LeftContainer, LeftIcon} from './styles';

function Header() {
  const {top} = useSafeAreaInsets();
  const {navigate} = useNavigation();
  const exit = require('assets/images/exit.png');
  const logo = require('assets/images/logo.png');
  return (
    <Container style={{height: top + 60}}>
      <LeftContainer onPress={() => navigate('SelectCharacter')}>
        <LeftIcon source={exit} style={{marginTop: top}} />
      </LeftContainer>
      <Image style={{marginTop: top}} source={logo} />
    </Container>
  );
}

export default Header;
