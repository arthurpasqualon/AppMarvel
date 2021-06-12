import styled from 'styled-components/native';
import normalize from '../../utils/normalize';
import fonts from '../../resources/Fonts';
import colors from '../../resources/Colors';

export const ItemContainer = styled.ImageBackground`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Title = styled.Text`
  font-family: ${fonts.bold};
  text-align: center;
  color: ${colors.white};
  font-size: ${normalize(48)}px;
  margin: 5px 15px;
`;

export const Description = styled.Text`
  text-align: center;
  color: ${colors.white};
  font-size: ${normalize(20)}px;
  margin: 5px 15px;
`;

export const ContentContainer = styled.View`
  flex: 3;
  justify-content: flex-end;
`;

export const ButtonContainer = styled.View`
  flex: 2;
  width: 80%;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

export const Container = styled.View`
  flex: 1;
`;
