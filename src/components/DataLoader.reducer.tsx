type State = {
  data: any[] | null;
  isLastPage: boolean;
  isLoading: boolean;
  error: boolean;
};

export enum ActionType {
  Load = 'Load',
  Success = 'Success',
  Error = 'Error',
  LoadMore = 'LoadMore',
}

type Action =
  | {
      type: ActionType.Success;
      data: any[];
      isLastPage: boolean;
    }
  | { type: ActionType.Error }
  | { type: ActionType.Load }
  | { type: ActionType.LoadMore };

export const initialState: State = {
  data: null,
  isLastPage: false,
  isLoading: false,
  error: false,
};

export const reducer = (state: State, action: Action): State => {
  if (action.type === ActionType.Load) {
    return {
      data: null,
      isLastPage: false,
      isLoading: true,
      error: false,
    };
  }

  if (action.type === ActionType.Success) {
    return {
      ...state,
      data: [...(state.data || []), ...action.data],
      isLastPage: action.isLastPage,
      error: false,
      isLoading: false,
    };
  }

  if (action.type === ActionType.Error) {
    return {
      ...state,
      isLoading: false,
      error: true,
    };
  }

  if (action.type === ActionType.LoadMore) {
    return {
      ...state,
      isLoading: true,
      error: false,
    };
  }

  return state;
};
