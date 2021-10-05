export type IssueState = 'all' | 'open' | 'closed';

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
