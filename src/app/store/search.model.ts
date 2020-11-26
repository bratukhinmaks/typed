export interface Repos {
  name: string;
  owner: {
    login: string;
  };
  branches_url: string;
}

export interface Branch {
  name: string;
  commit: {
    sha: string;
  };
}

export interface BackEndErrors {
  error: string;
}

export interface StateInterface {
  isLoadingRepos: boolean;
  repos: Repos[];
  isLoadingBranches: boolean;
  branches: Branch[];
  errors: string;
}
