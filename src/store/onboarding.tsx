const Types = {
  SHOWN: 'ONBOARING_SHOWN',
};

const initialState = {
  shown: false,
};

export const markAsShown = () => {
  return {
    type: Types.SHOWN,
    payload: {shown: true},
  };
};

export default function onboarding(state = initialState, action: any) {
  // console.warn('dispatch action', action)
  switch (action.type) {
    case Types.SHOWN:
      return {...action.payload};
    default:
      return state;
  }
}
