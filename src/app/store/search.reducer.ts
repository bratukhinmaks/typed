import {Action, createReducer, on} from '@ngrx/store';
import {
  getAllBranchesAction, getAllBranchesFailAction,
  getAllBranchesSuccessAction,
  getAllReposAction,
  getAllReposFailAction,
  getAllReposSuccessAction
} from './search.action';
import {StateInterface} from './search.model';


const initialState: StateInterface = {
  isLoadingRepos: false,
  repos: [],
  isLoadingBranches: false,
  branches: [],
  errors: ''
};

const searchReducer = createReducer(initialState,
  on(getAllReposAction, (state): StateInterface => ({
    ...state,
    isLoadingRepos: true,
    repos: [],
  })),

  on(getAllReposSuccessAction, (state, action): StateInterface => ({
    ...state,
    isLoadingRepos: false,
    repos: action.allRepos
  })),
  on(getAllReposFailAction, (state, action): StateInterface => ({
    ...state,
    isLoadingRepos: false,
    errors: action.error.message
  })),
  on(getAllBranchesAction, (state): StateInterface => ({
    ...state,
    isLoadingBranches: true,
    branches: [],
    errors: null,
  })),

  on(getAllBranchesSuccessAction, (state, action): StateInterface => ({
    ...state,
    isLoadingBranches: false,
    branches: action.allBranches,
  })),
  on(getAllBranchesFailAction, (state, action): StateInterface => ({
    ...state,
    isLoadingRepos: false,
    errors: action.error.message
  })),
);

export function reducer(state: StateInterface, action: Action) {
  return searchReducer(state, action);
}
