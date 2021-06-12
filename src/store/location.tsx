const Types = {
  SET_LOCATION: 'SET_LOCATION',
};

const initialState = {
  latitude: 40.705573,
  longitude: -74.0014567,
  latitudeDelta: 0.1922,
  longitudeDelta: 0.1421,
};

export const setLocation = (data: any) => {
  return {
    type: Types.SET_LOCATION,
    data,
  };
};

export default function location(state = initialState, action: any) {
  switch (action.type) {
    case Types.SET_LOCATION:
      return {
        ...action.data,
      };
    default:
      return state;
  }
}
