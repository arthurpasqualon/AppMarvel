import {useNavigation} from '@react-navigation/core';
import React from 'react';
import Button from '../../components/button';
import {ComicDetailProps} from '../../types';
import {
  InfoContainer,
  Container,
  Modal,
  Title,
  ButtonContainer,
  Image,
  Text,
  CenterContainer,
  BottomContaienr,
} from './styles';
import theme from './theme';
import strings from '../../locale/en-us';
import {Linking} from 'react-native';

function ComicDetails({route}: ComicDetailProps) {
  const {item} = route.params;
  const {ComicDetailsStrings} = strings;
  const price = item?.prices?.[0]?.price;
  const issueNumber = item?.issueNumber;
  const url = item?.urls?.[0]?.url;

  const onPressMore = () => {
    Linking.openURL(url);
  };

  const navigation = useNavigation();
  return (
    <Container>
      <Modal>
        <Title numberOfLines={1}>{item?.title}</Title>
        <CenterContainer>
          <Image
            resizeMode="stretch"
            source={{
              uri: `${item?.thumbnail?.path}.${item?.thumbnail?.extension}`,
            }}
          />
          <InfoContainer>
            <Text numberOfLines={1}>USD ${price}</Text>
            <Text numberOfLines={1}>Issue Number: {issueNumber}</Text>
          </InfoContainer>
        </CenterContainer>
        <BottomContaienr>
          {url && (
            <ButtonContainer>
              <Button
                labelText={ComicDetailsStrings.more}
                onPress={onPressMore}
              />
            </ButtonContainer>
          )}
          <ButtonContainer>
            <Button
              theme={theme.okButton}
              labelText={ComicDetailsStrings.dismiss}
              onPress={() => navigation.goBack()}
            />
          </ButtonContainer>
        </BottomContaienr>
      </Modal>
    </Container>
  );
}

export default ComicDetails;
