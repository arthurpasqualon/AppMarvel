import React, {useRef} from 'react';
import Colors from '../../resources/Colors';
import {SearchProps} from '../../types';
import {Input, SearchImage, Container, ImageContainer} from './styles';

const searchIcon = require('assets/images/search.png');

function Search({value, setValue, label, onSubmitEditing}: SearchProps) {
  const inputRef: any = useRef();

  return (
    <Container>
      <Input
        placeholderTextColor={Colors.light}
        ref={inputRef}
        placeholder={label}
        value={value}
        onChangeText={setValue}
        onSubmitEditing={onSubmitEditing}
      />
      <ImageContainer onPress={() => inputRef?.current?.focus()}>
        <SearchImage source={searchIcon} />
      </ImageContainer>
    </Container>
  );
}

export default Search;
