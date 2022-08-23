import useSWR from 'swr';
import urlcat from 'urlcat';

import {api, auth} from '../services/api';
import {fetcher} from '../services/fetcher';

interface SearchParams {
  text: string;
}

interface Response {
  data: any;
  loading: boolean;
  error?: string | null;
  refresh?: () => Promise<void>;
}

export default function useSearchCharacter({text}: SearchParams) {
  const hasName = text ? `&nameStartsWith=${text}` : '';
  const url = urlcat(api, `characters?&limit=100&${auth}${hasName}`);

  const {data, error, isValidating: loading, mutate} = useSWR(url, fetcher);

  const response: Response = {
    data,
    loading,
    error,
    refresh: mutate,
  };

  return response;
}
