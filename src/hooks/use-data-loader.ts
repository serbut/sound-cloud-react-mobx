import { useCallback, useContext, useEffect, useReducer } from 'react';
import { AppContext } from '../app-context';
import { Collection } from '../models/api';
import {
  Action,
  ActionType,
  initialState,
  reducer,
  State,
} from './use-data-loader-reducer';

function isCollection<T>(response: any): response is Collection<T> {
  return response.collection !== undefined;
}

const useDataLoader = <T>(
  url?: string,
  params: { [key: string]: any } = {}
) => {
  const { api } = useContext(AppContext);
  const [
    { data, isLoading, error, nextHref, isLastPage },
    dispatch,
  ] = useReducer<(prevState: State<T>, action: Action) => State<T>>(
    reducer,
    initialState
  );
  const paramsAsJSON = JSON.stringify(params);

  const onSuccess = (response: unknown) => {
    let data = response;
    let nextHref;

    if (isCollection<any>(response)) {
      data = response.collection;
      nextHref = response.next_href;
    }

    dispatch({
      type: ActionType.Success,
      data,
      nextHref,
    });
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

    api
      .load<unknown>(url, JSON.parse(paramsAsJSON))
      .then((data) => !skip && onSuccess(data))
      .catch(() => !skip && onError());

    return () => {
      skip = true;
    };
  }, [api, url, paramsAsJSON]);

  const loadMore = useCallback(() => {
    if (isLoading || isLastPage || !nextHref) {
      return;
    }

    const _nextHref = nextHref;
    dispatch({ type: ActionType.LoadNext });

    api
      .load<unknown>(nextHref)
      .then((data) => _nextHref === nextHref && onSuccess(data))
      .catch(() => _nextHref === nextHref && onError());
  }, [api, isLastPage, isLoading, nextHref]);

  const setData = useCallback((data: T) => {
    dispatch({
      type: ActionType.SetData,
      data,
    });
  }, []);

  return { data, isLoading, isLastPage, error, loadMore, setData };
};

export default useDataLoader;
