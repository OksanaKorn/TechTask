import { Component } from '@angular/core';
import { DataService } from './shared/dataService';
import { SearchRepoResult } from 'app/shared/repo';

export class Repo {
  id: number;
  name: string;
}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  repos: SearchRepoResult;
  selectedRepo: Repo;
  onSelect(repo: Repo): void {
    this.selectedRepo = repo;
  }

  public repoName: string = '';

  constructor(private data: DataService) { }

  public onSearch() {
    this.data.loadRepos(this.repoName)
      .subscribe(
      success => {
        if (success) {
          this.repos = success;
        }
      }
      );
  }
};

