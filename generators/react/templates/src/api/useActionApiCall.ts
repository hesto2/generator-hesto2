import { useState } from 'react';

export type UseActionApiReturn<T, V> = {
  error?: string;
  data?: T;
  loading: boolean;
  runApiCall: (variables: V) => Promise<T | null>;
};

export interface UseActionApiArgs<V, T> {
  apiCall: (body: V) => Promise<T>;
}

export const useActionApiCall = <T, V>({
  apiCall,
}: UseActionApiArgs<V, T>): UseActionApiReturn<T, V> => {
  const [error, setError] = useState<undefined | string>();
  const [data, setData] = useState<undefined | T>();
  const [loading, setLoading] = useState<boolean>(false);

  const makeApiCall = async (variables: V) => {
    setLoading(true);
    setError('');
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

  return { error, data, loading, runApiCall: makeApiCall };
};
