const Types = {
  SET_DEFAULT: 'SET_DEFAULT',
};

const initialState = {};

export const setDefaultSearch = ({data}: any) => {
  return {
    type: Types.SET_DEFAULT,
    ...data,
  };
};

export default function defaultSearch(state = initialState, action: any) {
  switch (action.type) {
    case Types.SET_DEFAULT:
      return {
        ...action.data,
      };
    default:
      return state;
  }
}
