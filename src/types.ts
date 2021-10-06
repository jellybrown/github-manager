export enum IssueState {
  All = 'all',
  Open = 'open',
  Closed = 'closed',
}

type UserName = {
  login: string;
};

export interface Issue {
  htmlUrl: string;
  state: IssueState;
  title: string;
  number: number;
  user: UserName;
  avatarUrl: string;
}
