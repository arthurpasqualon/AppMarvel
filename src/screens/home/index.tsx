/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {RefreshControl} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import ErrorContent from '../../components/error-content';
import Header from '../../components/header';
import useRequest from '../../hooks/useRequest';
import {api, auth} from '../../services/api';
import {
  ButtonContainer,
  ButtonImage,
  Container,
  ItemContainer,
  ItemImage,
} from './styles';

function Home() {
  const characterId = useSelector((state: any) => state.character.id);
  const url = `${api}characters/${characterId}/comics?&limit=100&${auth}`;
  const {data, error, loading, refresh} = useRequest({url});
  const {navigate} = useNavigation();
  const {bottom} = useSafeAreaInsets();
  const rocket = require('assets/images/rocket.png');

  return (
    <>
      <Container>
        <Header />
        <ErrorContent condition={!!error} />
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={data?.data?.results}
          columnWrapperStyle={{alignItems: 'center', justifyContent: 'center'}}
          keyExtractor={(item: any) => `${item?.id}`}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={refresh} />
          }
          refreshing={loading}
          renderItem={({item}: any) => (
            <ItemContainer onPress={() => navigate('ComicDetails', {item})}>
              <ItemImage
                resizeMode="stretch"
                source={{
                  uri: `${item?.thumbnail?.path}.${item?.thumbnail?.extension}`,
                }}
              />
              {/* <ItemText>{item}</ItemText> */}
            </ItemContainer>
          )}
        />
      </Container>
      <ButtonContainer
        onPress={() => {
          navigate('StoresMap');
        }}
        style={{bottom: bottom + 15}}>
        <ButtonImage source={rocket} />
      </ButtonContainer>
    </>
  );
}

export default Home;
