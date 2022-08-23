import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import Comics from '../screens/comics';
import StoresMap from '../screens/stores-map';
import Onboarding from '../screens/onboarding';
import SelectCharacter from '../screens/select-character';
import ComicDetails from '../screens/comic-detail';

const Root = createNativeStackNavigator();

function AppNavigator() {
  const onboardingShown = useSelector((state: any) => state.onboarding.shown);

  return (
    <Root.Navigator screenOptions={{headerShown: false}}>
      {!onboardingShown && (
        <>
          <Root.Screen name="ONBOARDING" component={Onboarding} />
        </>
      )}
      <Root.Screen
        name="SELECT_CHARACTER"
        component={SelectCharacter}
        options={{gestureEnabled: false}}
      />
      <Root.Screen name="COMICS" component={Comics} />

      <Root.Screen name="STORES_MAP" component={StoresMap} />
      <Root.Screen
        name="COMIC_DETAILS"
        component={ComicDetails}
        options={{
          presentation: 'transparentModal',
        }}
      />
    </Root.Navigator>
  );
}

export default AppNavigator;
