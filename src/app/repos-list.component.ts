import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/dataService';
import { SearchRepoResult } from './shared/repo';
import { NgIf } from '@angular/common';


@Component({
    selector: 'repos-list',
    templateUrl: 'repos-list.component.html',
    styleUrls: ['repos-list.component.css']
})

export class ReposList {
    page: number = 1;


    order: string = '';

    constructor(public data: DataService) {
        // this.repos = data.dataserviceRepos;
    }
}



