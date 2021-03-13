import { useEffect, useState } from 'react';

export interface UseApiReturn<T, V> {
  error?: string;
  data?: T;
  loading: boolean;
  refetch: () => Promise<T | null>;
}

export interface UseApiArgs<V, T> {
  apiCall: (body: V) => Promise<T>;
  variables: V;
}

export interface UseApiOptions {
  skip?: boolean;
}

export const useApiCall = <T, V>({
  apiCall,
  skip,
  variables,
}: UseApiArgs<V, T> & UseApiOptions): UseApiReturn<T, V> => {
  const [error, setError] = useState<undefined | string>();
  const [data, setData] = useState<undefined | T>();
  const [loading, setLoading] = useState<boolean>(false);
  const [hasRun, setHasRun] = useState<boolean>(false);

  const makeApiCall = async () => {
    setError('');
    setLoading(true);
    setHasRun(true);
    let result = null;
    try {
      const response = await apiCall(variables);
      setData(response);
      result = response;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
    return result;
  };

  useEffect(() => {
    // Check if we have not already ran the api call
    if (!hasRun && !skip && !loading) {
      makeApiCall();
    }
  }, [skip, loading]);

  return { error, data, loading, refetch: makeApiCall };
};
