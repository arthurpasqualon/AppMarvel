import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import fonts from '../../resources/Fonts';
import colors from '../../resources/Colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Modal = styled.View`
  padding: 10px;
  max-height: 90%;
  width: 80%;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.white};
`;

export const Image = styled(FastImage)`
  height: 300px;
  width: 90%;
`;

export const Header = styled.View`
  padding: 10px;
  flex: 1;
  align-self: center;
`;

export const ButtonContainer = styled.View`
  width: 90%;
  padding-vertical: 5px;
`;

export const Title = styled.Text`
  font-family: ${fonts.bold};
  margin: 10px;
  text-align: center;
  font-size: 16px;
  color: ${colors.secondary};
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
`;

export const Text = styled.Text`
  font-family: ${fonts.bold};
  margin: 10px 0px;
  text-align: center;
  font-size: 16px;
  color: ${colors.secondary};
`;

export const CenterContainer = styled.View`
  width: 100%;
  align-items: center;
`;
export const BottomContaienr = styled.View`
  width: 100%;
  align-items: center;
`;
