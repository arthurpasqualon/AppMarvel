/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import {useState, useEffect, useCallback} from 'react';

interface RequestParams {
  url: string;
  parameters?: object;
}

interface Response {
  data: any;
  loading: boolean;
  error?: string | null;
  refresh?: () => Promise<void>;
}

export default function useRequest({url = '', parameters = {}}: RequestParams) {
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
    fetch();
    async function fetch() {
      await axios
        .get(`${url}`, {params: parameters})
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
  }, [url, refresh, loading]);

  const response: Response = {
    data,
    loading,
    error,
    refresh: onRefresh,
  };

  return response;
}
