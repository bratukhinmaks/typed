import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {StateInterface} from './search.model';
import {branchesSelect, isLoadingBranchesSelect, isLoadingReposSelect, reposSelect} from './search.selectors';
import {getAllBranchesAction, getAllReposAction} from './search.action';

@Injectable({providedIn: 'root'})

export class SearchFacade {
  public allRepos$ = this.store.pipe(select(reposSelect));
  public reposBranches$ = this.store.pipe(select(branchesSelect));
  public isBranchesLoading$ = this.store.pipe(select(isLoadingBranchesSelect));
  public isReposLoading$ = this.store.pipe(select(isLoadingReposSelect));

  constructor(private store: Store<StateInterface>) {
  }

  public getAllBranches(branchName: string): void {
    this.store.dispatch(getAllBranchesAction({branchName}));
  }
  public getAllRepos(user: string): void {
    this.store.dispatch(getAllReposAction({user}));
  }
}
