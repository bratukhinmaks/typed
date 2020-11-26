import {Component, Input, OnInit} from '@angular/core';
import {SearchFacade} from '../../../store/search.facade';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.sass']
})
export class RepoComponent  {
  @Input() repo;
  constructor(private searchFacade: SearchFacade) { }

  public getBranches(branches: string) {
    const searchBranch = branches.replace(/{\/.*?\}/g, '');
    this.searchFacade.getAllBranches(searchBranch);
  }
}
