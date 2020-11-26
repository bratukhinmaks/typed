import {Component, OnInit} from '@angular/core';
import {SearchFacade} from './store/search.facade';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  public repos$ = this.searchFacade.allRepos$;
  public branches$ = this.searchFacade.reposBranches$;
  public isLoadingRepos$ = this.searchFacade.isReposLoading$;
  public isLoadingBranches$ = this.searchFacade.isBranchesLoading$;
  public form: FormGroup;
  public selectedItem: number;
  public p = 1;

  constructor(private searchFacade: SearchFacade, private fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this.forminitializer();
  }

  public forminitializer(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required]]
    });
  }

  public searchUsers(ev): void {
    this.searchFacade.getAllRepos(ev.target.value);
  }

}
