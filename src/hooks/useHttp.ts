import { useCallback, useState } from 'react';
import axios from '../config/axios';

interface Request {
  (
    url: string,
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE',
    data?: any,
    headers?: { [key: string]: string }
  ): Promise<any>;
}

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const request:Request = useCallback(async (url, method = 'GET', data = null, headers = {}) => {
      setLoading(true);

    try {
      const response = await axios({
        url,
        method,
        headers: {
          ...headers
        },
        data,
      });

      if (!response.data.status) {
        throw response.data?.payload || 'Something went wrong.';
      }

      setLoading(false);
      return response.data?.payload;
    } catch (err) {

      if (err instanceof Error) {
        setLoading(false);
        setError(err.message);
      } else {
        console.log('Unexpected error', err);
      }

      throw err;
    }
  }, []);

  const clearError = useCallback(() => setError(''), []);

  return { loading, request, error, clearError };
}
