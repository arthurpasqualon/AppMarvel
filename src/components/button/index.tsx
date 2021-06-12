/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {Container, Label} from './styles';

interface ThemeProps {
  fontFamily?: string;
  fontSize?: number;
  borderColor?: string;
  backgroundColor?: string;
  fontColor?: string;
}

interface ButtonProps {
  onPress?: () => void;
  labelText?: string;
  loading?: boolean;
  theme?: ThemeProps;
}

function Button({theme, onPress, labelText, loading}: ButtonProps) {
  return (
    <ThemeProvider theme={theme || {}}>
      <Container onPress={onPress}>
        {loading ? (
          <ActivityIndicator
            style={{height: 20, width: 20, alignSelf: 'center'}}
          />
        ) : (
          <Label>{labelText}</Label>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default Button;
