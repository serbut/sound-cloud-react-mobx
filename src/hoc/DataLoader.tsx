import { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../app-context';
import { Collection } from '../models/api';

const DataLoader = ({
  url,
  params = JSON.stringify({}),
  render,
}: {
  url?: string;
  params?: string;
  render: Function;
}) => {
  const { api } = useContext(AppContext);
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isLastPage, setLastPage] = useState<boolean>(true);
  const nextHref = useRef<string | null | undefined>();

  const onSuccess = (response: Collection<any>) => {
    if (!response.collection.length && response.next_href) {
      console.error('No data but next href exists!!!');
    }

    setLoading(false);
    setData([...data, ...response.collection]);
    setLastPage(!response.next_href);
    nextHref.current = response.next_href;
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  useEffect(() => {
    if (!url) {
      return;
    }

    let skip = false;

    setError(false);
    setData([]);
    setLastPage(true);
    setLoading(true);
    nextHref.current = null;

    api
      .loadData<any>(url, JSON.parse(params))
      .then((data) => !skip && onSuccess(data))
      .catch(() => onError());

    return () => {
      skip = true;
    };
    // eslint-disable-next-line
  }, [api, url, params]);

  const loadMore = () => {
    if (isLoading || isLastPage || !nextHref.current) {
      return;
    }

    const _nextHref = nextHref.current;

    setLoading(true);

    api
      .loadMore<any>(nextHref.current)
      .then((data) => _nextHref === nextHref.current && onSuccess(data))
      .catch(() => onError());
  };

  return render({
    data,
    isLoading,
    isLastPage,
    error,
    loadMore,
  });
};

export default DataLoader;
