import styled from 'styled-components/native';
import normalize from '../../utils/normalize';
import colors from '../../resources/Colors';

export const Container = styled.View`
  background-color: ${colors.primary};
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 115px;
  height: 49px;
  align-self: center;
`;

export const LeftIcon = styled.Image`
  width: ${normalize(25)}px;
  height: ${normalize(25)}px;
`;

export const LeftContainer = styled.TouchableOpacity`
  margin: 18px;
  position: absolute;
  left: 0px;
`;
