import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import fonts from '../../resources/Fonts';
import colors from '../../resources/Colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.secondary};
`;

export const ItemContainer = styled.TouchableOpacity`
  width: 30%;
  align-items: center;
  height: 150px;
`;

export const ItemText = styled.Text`
  font-family: ${fonts.bold};
  padding: 5px;
  text-align: center;
  font-size: 12px;
  color: ${colors.white};
`;

export const ItemImage = styled(FastImage)`
  height: 130px;
  width: 90%;
`;

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${colors.primary};
  height: 58px;
  width: 58px;
  border-radius: 30px;
  right: 15px;
  position: absolute;
  justify-content: center;
`;

export const ButtonImage = styled.Image`
  height: 32px;
  width: 32px;
  align-self: center;
`;
