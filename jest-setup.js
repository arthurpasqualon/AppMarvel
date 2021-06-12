/* eslint-disable no-undef */
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-safe-area-context');

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

const mockedFn = jest.fn();
jest.mock('@react-navigation/core', () => {
  return {
    ...jest.requireActual('@react-navigation/core'),
    useNavigation: () => ({
      navigate: mockedFn,
    }),
  };
});

jest.mock('react-native-safe-area-context', () => {
  return {
    ...jest.requireActual('react-native-safe-area-context'),
    useSafeAreaInsets: () => ({
      top: mockedFn,
    }),
  };
});
