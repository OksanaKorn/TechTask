import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";
import { SearchRepoResult } from './repo';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataService {
    constructor(private http: HttpClient) { }

    public dataserviceRepos: SearchRepoResult = new SearchRepoResult();

    public loadRepos(repoName: string) {
        return this.http.get<SearchRepoResult>('https://api.github.com/search/repositories?q=' + repoName + '+in:name+&sort=repoName&order=desc')
            .map(result => this.dataserviceRepos = result);

    };
}
