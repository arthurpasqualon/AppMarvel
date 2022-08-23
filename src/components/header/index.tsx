import {useNavigation} from '@react-navigation/core';
import React, {useCallback} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootStackScreenProps} from '../../routes/types';

import {Container, Image, LeftContainer, LeftIcon} from './styles';

function Header() {
  const {top} = useSafeAreaInsets();

  const {navigate} = useNavigation<RootStackScreenProps>();
  const exit = require('assets/images/exit.png');
  const logo = require('assets/images/logo.png');

  const onPressBack = useCallback(() => {
    navigate('SELECT_CHARACTER');
  }, [navigate]);

  return (
    <Container style={{height: top + 60}}>
      <LeftContainer onPress={onPressBack}>
        <LeftIcon source={exit} style={{marginTop: top}} />
      </LeftContainer>
      <Image style={{marginTop: top}} source={logo} />
    </Container>
  );
}

export default Header;
