export type State<T> = {
  data: T | null;
  isLoading: boolean;
  error: boolean;
  nextHref: string | null | undefined;
  isLastPage: boolean;
};

export enum ActionType {
  Load = 'Load',
  Success = 'Success',
  Error = 'Error',
  LoadNext = 'LoadNext',
  SetData = 'SetData',
}

export type Action =
  | {
      type: ActionType.Success;
      data: any;
      nextHref: string | null | undefined;
    }
  | { type: ActionType.Error }
  | { type: ActionType.Load }
  | { type: ActionType.LoadNext }
  | { type: ActionType.SetData; data: any };

export const initialState: State<any> = {
  data: null,
  isLoading: false,
  error: false,
  nextHref: null,
  isLastPage: false,
};

export const reducer = (state: State<any>, action: Action): State<any> => {
  if (action.type === ActionType.Load) {
    return {
      data: null,
      isLoading: true,
      error: false,
      nextHref: null,
      isLastPage: false,
    };
  }

  if (action.type === ActionType.Success) {
    return {
      data:
        state.data && Array.isArray(state.data)
          ? [...state.data, ...action.data]
          : action.data,
      error: false,
      isLoading: false,
      nextHref: action.nextHref,
      isLastPage: !action.nextHref,
    };
  }

  if (action.type === ActionType.Error) {
    return {
      ...state,
      isLoading: false,
      error: true,
    };
  }

  if (action.type === ActionType.LoadNext) {
    return {
      ...state,
      isLoading: true,
      error: false,
    };
  }

  if (action.type === ActionType.SetData) {
    return {
      ...state,
      data: action.data,
    };
  }

  return state;
};
