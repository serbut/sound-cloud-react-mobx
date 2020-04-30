import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../app-context';

const useDataLoader = <T>(
  url?: string,
  params: { [key: string]: any } = {}
) => {
  const { api } = useContext(AppContext);
  const [data, setData] = useState<T | undefined | null>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const paramsAsJSON = JSON.stringify(params);

  useEffect(() => {
    if (!url) {
      return;
    }

    let skip = false;

    setData(null);
    setLoading(true);

    api
      .load<T>(url, JSON.parse(paramsAsJSON))
      .then((data) => !skip && setData(data))
      .catch(() => !skip && setError(true))
      .finally(() => !skip && setLoading(false));

    return () => {
      skip = true;
    };
  }, [api, url, paramsAsJSON]);

  return { data, isLoading, error };
};

export default useDataLoader;
