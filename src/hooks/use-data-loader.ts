import { useCallback, useContext, useEffect, useReducer, useRef } from 'react';
import { AppContext } from '../app-context';
import { Collection } from '../models/api';
import { ActionType, initialState, reducer } from './use-data-loader-reducer';

const useDataLoader = (url?: string, params?: { [key: string]: string }) => {
  const { api } = useContext(AppContext);
  const [{ data, isLoading, error, isLastPage }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const nextHref = useRef<string | null | undefined>();
  const paramsAsJSON = JSON.stringify(params);

  const onSuccess = ({ collection, next_href }: Collection<any>) => {
    dispatch({
      type: ActionType.Success,
      data: collection,
      isLastPage: !next_href,
    });
    nextHref.current = next_href;
  };

  const onError = () => {
    dispatch({ type: ActionType.Error });
  };

  useEffect(() => {
    if (!url) {
      return;
    }

    let skip = false;
    dispatch({ type: ActionType.Load });
    nextHref.current = null;

    api
      .loadData<any>(url, JSON.parse(paramsAsJSON))
      .then((data) => !skip && onSuccess(data))
      .catch(() => onError());

    return () => {
      skip = true;
    };
  }, [api, url, paramsAsJSON]);

  const loadMore = useCallback(() => {
    if (isLoading || isLastPage || !nextHref.current) {
      return;
    }

    const _nextHref = nextHref.current;
    dispatch({ type: ActionType.LoadMore });

    api
      .loadMore<any>(nextHref.current)
      .then((data) => _nextHref === nextHref.current && onSuccess(data))
      .catch(() => onError());
  }, [api, isLastPage, isLoading]);

  return [data, isLoading, isLastPage, error, loadMore];
};

export default useDataLoader;
