import axios from 'axios';

type IssueState = 'all' | 'open' | 'closed';

class GithubService {
  private baseUrl = 'https://api.github.com';

  search(query: string): Promise<any> {
    return axios
      .get(`${this.baseUrl}/search/repositories?q=${query}`)
      .then((res) => res.data)
      .catch((err) => new Error('GithubService search Error'));
  }

  getRepo(repo: string): Promise<any> {
    return axios
      .get(`${this.baseUrl}/${repo}`)
      .then((res) => res.data)
      .catch((err) => new Error('GithubService getRopo Error'));
  }

  getIssue(repo: string, issueState: IssueState): Promise<any> {
    return axios
      .get(`${this.baseUrl}/repos/${repo}/issues?state=${issueState}`)
      .then((res) => res.data)
      .catch((err) => new Error('GithubService getIssue Error'));
  }
}

export default GithubService;
