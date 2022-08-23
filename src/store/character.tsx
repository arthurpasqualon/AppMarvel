import {SelectedAction} from '../types';

const Types = {
  SET_CHARACTER: 'SET_CHARACTER',
};

const initialState = {
  id: null,
};

export const setCharacter = (id: number) => {
  return {
    type: Types.SET_CHARACTER,
    id,
  };
};

export default function character(
  state = initialState,
  action: SelectedAction,
) {
  switch (action.type) {
    case Types.SET_CHARACTER:
      return {
        id: action.id,
      };
    default:
      return state;
  }
}
