import { useEffect, useState } from 'react';
import { Collection } from '../models/api';
import useDataLoader from './use-data-loader';

const useCollectionDataLoader = <T>(
  initialUrl?: string,
  params: { [key: string]: any } = {}
) => {
  const [url, setUrl] = useState<string | undefined>(initialUrl);
  const [data, setData] = useState<T[]>([]);
  const [nextHref, setNextHref] = useState<string | undefined | null>();
  const paramsAsJSON = JSON.stringify(params);
  const { data: dataChunk, isLoading, error } = useDataLoader<Collection<T>>(
    url,
    params
  );

  useEffect(() => {
    setData([]);
    setNextHref(null);
  }, [initialUrl, paramsAsJSON]);

  useEffect(() => {
    if (!dataChunk) {
      return;
    }

    setData((data) => [...data, ...dataChunk.collection]);
    setNextHref(dataChunk.next_href);
  }, [dataChunk]);

  const loadNext = () => {
    nextHref && setUrl(nextHref);
  };

  return {
    data,
    isLoading,
    error,
    setData,
    isLastPage: nextHref === undefined,
    loadMore: loadNext,
  };
};

export default useCollectionDataLoader;
