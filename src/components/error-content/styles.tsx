import styled from 'styled-components/native';
import colors from '../../resources/Colors';
import fonts from '../../resources/Fonts';

export const Title = styled.Text`
  font-family: ${fonts.bold};
  text-align: center;
  margin-horizontal: 20px;
  color: ${colors.white};
  font-size: 24px;
`;

export const SubTitle = styled.Text`
  font-family: ${fonts.bold};
  text-align: center;
  margin-horizontal: 20px;
  color: ${colors.white};
  font-size: 14px;
`;
