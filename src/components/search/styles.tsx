import styled from 'styled-components/native';
import fonts from '../../resources/Fonts';
import colors from '../../resources/Colors';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  margin-bottom: 5px;
`;

export const Input = styled.TextInput`
  color: ${colors.white};
  font-family: ${fonts.bold};
  max-width: 80%;
  margin: 10px;
  font-size: 24px;
  margin-left: 7%;
`;

export const ImageContainer = styled.TouchableOpacity`
  resize-mode: contain;
  align-self: center;
`;

export const SearchImage = styled.Image`
  height: 22px;
  width: 22px;
`;
