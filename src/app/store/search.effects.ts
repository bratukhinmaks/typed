import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  getAllBranchesAction, getAllBranchesFailAction, getAllBranchesSuccessAction,
  getAllReposAction,
  getAllReposFailAction,
  getAllReposSuccessAction
} from './search.action';
import {catchError, map, switchMap} from 'rxjs/operators';
import {SearchService} from '../shared/search.service';
import {of} from 'rxjs';


@Injectable()
export class SearchEffect {
  constructor(private actions$: Actions, private searchServ: SearchService) {
  }

  searchRepos$ = createEffect(() => this.actions$.pipe(
    ofType(getAllReposAction),
    switchMap(({user}) => {
      return this.searchServ.getUserRepos(user).pipe(
        map((allRepos) => {
          return getAllReposSuccessAction({allRepos});
        }),
        catchError((err) => {
          return of(getAllReposFailAction(err));
        })
      );
    })
  ));

  searchBranches$ = createEffect(() => this.actions$.pipe(
    ofType(getAllBranchesAction),
    switchMap(({ branchName}) => {
      return this.searchServ.getRepoBranches(branchName).pipe(
        map((allBranches) => {
          return getAllBranchesSuccessAction({allBranches});
        }),
        catchError((err) => {
          return of(getAllBranchesFailAction(err.toString()));
        })
      );
    })
  ));
}
