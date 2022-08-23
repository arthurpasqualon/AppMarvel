import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {RefreshControl, FlatList, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import useSWR from 'swr';
import urlcat from 'urlcat';

import ErrorContent from '../../components/error-content';
import Header from '../../components/header';
import {RootStackScreenProps} from '../../routes/types';

import {api, auth} from '../../services/api';
import {fetcher} from '../../services/fetcher';

import {
  ButtonContainer,
  ButtonImage,
  Container,
  ItemContainer,
  ItemImage,
} from './styles';

const rocket = require('assets/images/rocket.png');

function Comics() {
  const characterId = useSelector((state: any) => state.character.id);

  const url = urlcat(
    api,
    `characters/${characterId}/comics?&limit=100&${auth}`,
  );

  const {data, error, isValidating: loading, mutate} = useSWR(url, fetcher);

  const {navigate} = useNavigation<RootStackScreenProps>();
  const {bottom} = useSafeAreaInsets();

  return (
    <>
      <Container>
        <Header />
        <ErrorContent condition={!!error} />
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={data?.data?.results}
          columnWrapperStyle={styles.columnWrapper}
          keyExtractor={(item: any) => `${item?.id}`}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={mutate} />
          }
          refreshing={loading}
          renderItem={({item}: any) => (
            <ItemContainer onPress={() => navigate('COMIC_DETAILS', {item})}>
              <ItemImage
                resizeMode="stretch"
                source={{
                  uri: `${item?.thumbnail?.path}.${item?.thumbnail?.extension}`,
                }}
              />
            </ItemContainer>
          )}
        />
      </Container>
      <ButtonContainer
        onPress={() => {
          navigate('STORES_MAP');
        }}
        style={{bottom: bottom + 15}}>
        <ButtonImage source={rocket} />
      </ButtonContainer>
    </>
  );
}

const styles = StyleSheet.create({
  columnWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Comics;
