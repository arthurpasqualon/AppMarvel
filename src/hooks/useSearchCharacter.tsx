import axios from 'axios';
import {useState, useEffect, useCallback} from 'react';
import {api, auth} from '../services/api';

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
  const urlBase = `${api}characters?&limit=100&${auth}`;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const onRefresh = useCallback(
    async function () {
      setRefresh(!refresh);
      setLoading(true);
      setError(null);
    },
    [refresh],
  );

  useEffect(() => {
    if (text !== '') {
      fetch();
    }
    async function fetch() {
      await axios
        .get(`${urlBase}&nameStartsWith=${text}`)
        .then(function (response) {
          setData(response?.data);
        })
        .catch(function (err) {
          setError(err?.message);
        })
        .then(function () {
          setLoading(false);
        });
    }
  }, [text]);

  const response: Response = {
    data,
    loading,
    error,
    refresh: onRefresh,
  };

  return response;
}
