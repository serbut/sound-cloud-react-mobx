import { useCallback, useContext, useEffect, useReducer, useRef } from 'react';
import { PAGE_SIZE } from '../api';
import { AppContext } from '../app-context';
import { Collection } from '../models/api';
import {
  Action,
  ActionType,
  initialState,
  reducer,
  State,
} from './use-data-loader-reducer';

const useDataLoader = <T>(
  url: string,
  params: { [key: string]: string } = {}
) => {
  const { api } = useContext(AppContext);
  const [{ data, isLoading, error, isLastPage }, dispatch] = useReducer<
    (prevState: State<T>, action: Action) => State<T>
  >(reducer, initialState);
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
      .load<any>(url, {
        limit: PAGE_SIZE,
        linked_partitioning: 1,
        ...JSON.parse(paramsAsJSON),
      })
      .then((data) => !skip && onSuccess(data))
      .catch(() => !skip && onError());

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
      .load<any>(nextHref.current)
      .then((data) => _nextHref === nextHref.current && onSuccess(data))
      .catch(() => onError());
  }, [api, isLastPage, isLoading]);

  const setData = useCallback((data: T[]) => {
    dispatch({
      type: ActionType.SetData,
      data,
    });
  }, []);

  return { data, isLoading, isLastPage, error, loadMore, setData };
};

export default useDataLoader;
