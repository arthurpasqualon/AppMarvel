import React, {useRef} from 'react';
import {SearchProps} from '../../types';
import {Input, SearchImage, Container, ImageContainer} from './styles';

function Search({value, setValue, label, onSubmitEditing}: SearchProps) {
  const searchIcon = require('assets/images/search.png');
  const inputRef: any = useRef();

  return (
    <Container>
      <Input
        placeholderTextColor="#E5E5E5"
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
