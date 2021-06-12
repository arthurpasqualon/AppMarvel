import styled from 'styled-components/native';
import fonts from '../../resources/Fonts';
import colors from '../../resources/Colors';

export const Container = styled.TouchableOpacity`
  border-color: ${({theme}: any) => theme?.borderColor || 'transparent'};
  background-color: ${({theme}: any) =>
    theme?.backgroundColor || colors.primary};
  width: 100%;
  border-width: 1px;
  padding: 10px;
`;

export const Label = styled.Text`
  font-family:${({theme}: any) => theme?.fontFamily || fonts.bold}
  font-size: ${({theme}: any) => theme?.fontSize || 14}px
  color: ${({theme}: any) => theme?.fontColor || colors.white};
  text-align: center;
`;
