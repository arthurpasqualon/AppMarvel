import {Dispatch, SetStateAction} from 'react';

export interface SelectedAction {
  type: string;
  id: number;
}

export interface ErrorContentProps {
  condition: boolean;
}

export interface SearchProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  label: string;
  onSubmitEditing: () => void;
}
export interface HomeProps {
  route: {
    params: {
      characterId: number;
    };
  };
}

interface Url {
  url: string;
}
interface Price {
  price: string;
}
export interface ComicDetailProps {
  route: {
    params: {
      item: {
        title: string;
        thumbnail: {
          path: string;
          extension: string;
        };
        urls: Array<Url>;
        prices: Array<Price>;
        issueNumber: number;
      };
    };
  };
}
