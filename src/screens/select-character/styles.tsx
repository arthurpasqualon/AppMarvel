import styled from 'styled-components/native';
import fonts from '../../resources/Fonts';
import colors from '../../resources/Colors';

import FastImage from 'react-native-fast-image';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.secondary};
`;

export const ContentContainer = styled.SafeAreaView`
  flex: 1;
`;

export const ItemContainer = styled.TouchableOpacity`
  width: 30%;
  align-items: center;
  height: 180px;
`;

export const ItemText = styled.Text`
  font-family: ${fonts.bold};
  padding: 5px;
  text-align: center;
  font-size: 12px;
  color: ${colors.white};
`;

export const ItemImage = styled(FastImage)`
  height: 120px;
  width: 90%;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  margin-horizontal: 15%;
  bottom: 30px;
  width: 70%;
`;
