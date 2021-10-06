import React, { useCallback, useEffect, useRef, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import queryString from 'query-string';
import GithubService from 'lib/githubService';
import { extractIssueContent } from 'utils/extract';
import { Issue, IssueState } from 'types';
import Layout from 'components/Layout';
import IssueList from './IssueList';
import useRepository from 'hooks/useRepository';
import Header from 'components/Header';
import Filter from './Filter';

interface MatchParams {
  userId: string;
  repoName: string;
}

const Issues = ({ location, match }: RouteComponentProps<MatchParams>) => {
  const { repoList } = useRepository();
  const githubService = useRef<GithubService>(new GithubService());
  const [issueState, setIssueState] = useState<IssueState>(IssueState.Open);
  const [issueList, setIssueList] = useState<Issue[]>([]);
  const query = queryString.parse(location.search);
  const { userId, repoName } = match.params;
  const REPOSITORY = `${userId}/${repoName}`;

  useEffect(() => {
    if (query.state === IssueState.Open) return;
    else if (query.state === IssueState.Closed)
      setIssueState(IssueState.Closed);
    else if (query.state === IssueState.All) setIssueState(IssueState.All);
  }, [query.state]);

  const getIssueData = useCallback(async () => {
    if (!githubService.current) return;

    const data = await githubService.current.getIssue(REPOSITORY, issueState);
    const list = extractIssueContent(data);
    setIssueList(list);
  }, [REPOSITORY, issueState]);

  useEffect(() => {
    getIssueData();
  }, [getIssueData]);

  return (
    <>
      <Header isHome={false} repoList={repoList} />
      <Layout title="Issue List">
        <Filter {...{ issueState, setIssueState }} />
        <IssueList {...{ issueList }} repository={REPOSITORY} />
      </Layout>
    </>
  );
};

export default Issues;
