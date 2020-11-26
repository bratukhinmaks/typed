import {createAction, props} from '@ngrx/store';
import {HttpErrorResponse} from '@angular/common/http';
import {BackEndErrors, Branch, Repos} from './search.model';

export const getAllReposAction = createAction('[SEARCH] Get All Repos', props<{ user: string }>());
export const getAllReposSuccessAction = createAction(
  '[SEARCH] Get All Repos Success',
  props<{ allRepos: Repos[] }>()
);
export const getAllReposFailAction = createAction(
  '[SEARCH] Get All Repos Fail',
  props<{ error: HttpErrorResponse }>()
);

export const getAllBranchesAction = createAction('[SEARCH] Get Repos Branches', props<{ branchName: string }>());
export const getAllBranchesSuccessAction = createAction(
  '[SEARCH] Get Repos Branches Success',
  props<{ allBranches: Branch[] }>()
);

export const getAllBranchesFailAction = createAction(
  '[SEARCH] Get Repos Branches Fail',
  props<{ error: HttpErrorResponse }>()
);
