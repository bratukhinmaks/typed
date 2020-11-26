import {createFeatureSelector, createSelector} from '@ngrx/store';
import {StateInterface} from './search.model';

export const selectSearch = createFeatureSelector<StateInterface>('search');

export const reposSelect = createSelector(selectSearch, (state) => state.repos);
export const branchesSelect = createSelector(selectSearch, (state) => state.branches);
export const isLoadingBranchesSelect = createSelector(selectSearch, (state) => state.isLoadingBranches);
export const isLoadingReposSelect = createSelector(selectSearch, (state) => state.isLoadingRepos);
