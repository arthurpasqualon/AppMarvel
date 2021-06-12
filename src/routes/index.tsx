import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import Home from '../screens/home';
import StoresMap from '../screens/stores-map';
import Onboarding from '../screens/onboarding';
import SelectCharacter from '../screens/select-character';
import {fadeFromBottom} from './styles';
import ComicDetails from '../screens/comic-detail';
import LoadingScreen from '../screens/loading';

const Root = createStackNavigator();
const Stack = createStackNavigator();

function AppNavigator() {
  const onboardingShown = useSelector((state: any) => state.onboarding.shown);
  const AppStack = () => (
    <>
      <Stack.Navigator headerMode={'none'}>
        {!onboardingShown && (
          <>
            <Stack.Screen name="Onboarding" component={Onboarding} />
          </>
        )}
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="StoresMap" component={StoresMap} />
      </Stack.Navigator>
    </>
  );

  return (
    <Root.Navigator headerMode={'none'} mode={'modal'}>
      <Root.Screen name="App" component={AppStack} />
      <Root.Screen
        name="SelectCharacter"
        component={SelectCharacter}
        options={{gestureEnabled: false}}
      />
      <Root.Screen
        name="ComicDetails"
        component={ComicDetails}
        options={{
          ...fadeFromBottom({}, {backgroundColor: 'black'}),
          gestureEnabled: false,
        }}
      />
    </Root.Navigator>
  );
}

export default AppNavigator;
