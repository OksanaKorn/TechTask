export class SearchRepoResult {
    items: Array<RepoItem> = new Array<RepoItem>();
}

export class RepoItem {
    full_name: string;
    stargazers_count: number;
    has_issues: boolean;
    open_issues_count: number;
    private: boolean;
    html_url: string;
    owner: RepoOwner = new RepoOwner();
}

export class RepoOwner {
    login: string;
    avatar_url: string;
}

