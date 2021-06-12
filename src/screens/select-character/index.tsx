/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/core';
import React, {useMemo, useState} from 'react';
import {LayoutAnimation} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/button';
import ErrorContent from '../../components/error-content';
import Search from '../../components/search';
import useSearchCharacter from '../../hooks/useSearchCharacter';
import {setCharacter} from '../../store/character';
import strings from '../../locale/en-us';
import {
  Container,
  ButtonContainer,
  ItemContainer,
  ItemImage,
  ItemText,
  ContentContainer,
} from './styles';
import theme from './theme';

function SelectCharacter() {
  const initialData = useSelector((state: any) => state.defaultSearch);
  const [text, setText] = useState('');
  const [searchText, setSearchText] = useState('');
  const [selected, setSelected] = useState(0);
  const {data, error, loading, refresh} = useSearchCharacter({
    text: searchText,
  });
  const {navigate} = useNavigation();
  const dispatch = useDispatch();
  const {SelectCharacterStrings} = strings;

  const onPressItem = (id: number) => {
    setSelected(id);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  const onSubmit = () => {
    setSearchText(text);
    setSelected(0);
  };

  const displayError = useMemo(() => {
    if (initialData && searchText === '') {
      return false;
    }
    if (!loading && error) {
      return true;
    }
    if (!data?.data?.results?.length) {
      return true;
    }
    return false;
  }, [loading, error, data, initialData]);

  const onPressConfirm = () => {
    dispatch(setCharacter({id: selected}));
    navigate('Home');
  };

  return (
    <Container>
      <ContentContainer>
        <Search
          onSubmitEditing={onSubmit}
          label={SelectCharacterStrings.searchLabel}
          value={text}
          setValue={setText}
        />
        <ErrorContent condition={displayError} />
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={data?.data?.results || initialData?.results}
          columnWrapperStyle={{alignItems: 'center', justifyContent: 'center'}}
          keyExtractor={(item: any) => `${item?.id}`}
          renderItem={({item}: any) => (
            <ItemContainer onPress={() => onPressItem(item?.id)}>
              <ItemImage
                style={
                  selected === item?.id && {borderWidth: 4, borderColor: 'red'}
                }
                resizeMode="stretch"
                source={{
                  uri: `${item?.thumbnail?.path}.${item?.thumbnail?.extension}`,
                }}
              />
              <ItemText>{item?.name}</ItemText>
            </ItemContainer>
          )}
        />
      </ContentContainer>
      {selected !== 0 && (
        <ButtonContainer>
          <Button
            labelText={SelectCharacterStrings.chooseText}
            onPress={onPressConfirm}
            theme={theme.button}
          />
        </ButtonContainer>
      )}
    </Container>
  );
}

export default SelectCharacter;
