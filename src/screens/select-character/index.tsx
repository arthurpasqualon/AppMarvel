import {useNavigation} from '@react-navigation/core';
import React, {useMemo, useState} from 'react';
import {LayoutAnimation, FlatList, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

import {RootStackScreenProps} from '../../routes/types';

import Button from '../../components/button';
import ErrorContent from '../../components/error-content';
import Search from '../../components/search';
import useSearchCharacter from '../../hooks/useSearchCharacter';

import {setCharacter} from '../../store/character';

import {
  Container,
  ButtonContainer,
  ItemContainer,
  ItemImage,
  ItemText,
  ContentContainer,
} from './styles';
import theme from './theme';

import strings from '../../locale/en-us';

function SelectCharacter() {
  const [text, setText] = useState('');
  const [searchText, setSearchText] = useState('');
  const [selected, setSelected] = useState(0);
  const {data, error, loading} = useSearchCharacter({
    text: searchText,
  });
  const {navigate} = useNavigation<RootStackScreenProps>();
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
    if (error) {
      return true;
    }
    if (!loading && !data?.data?.results?.length) {
      return true;
    }
    return false;
  }, [loading, error, data]);

  const onPressConfirm = () => {
    dispatch(setCharacter(selected));
    navigate('COMICS');
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
          data={data?.data?.results}
          refreshing={loading}
          columnWrapperStyle={styles.columnWrapper}
          keyExtractor={(item: any) => `${item?.id}`}
          renderItem={({item}: any) => (
            <ItemContainer onPress={() => onPressItem(item?.id)}>
              <ItemImage
                style={selected === item?.id && styles.selected}
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

const styles = StyleSheet.create({
  selected: {
    borderWidth: 4,
    borderColor: 'red',
  },
  columnWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SelectCharacter;
