import colors from '../../resources/Colors';
import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${colors.white};
  height: 42px;
  width: 42px;
  border-radius: 30px;
  left: 15px;
  position: absolute;
  justify-content: center;
`;

export const ButtonImage = styled.Image`
  height: 22px;
  width: 22px;
  align-self: center;
`;
