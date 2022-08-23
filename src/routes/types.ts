import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  COMICS: any;
  SELECT_CHARACTER: any;
  COMIC_DETAILS: any;
  STORES_MAP: any;
};

export type RootStackScreenProps =
  NativeStackNavigationProp<RootStackParamList>;
