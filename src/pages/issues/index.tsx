import React, { useCallback, useEffect, useRef, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import queryString from 'query-string';
import GithubService from 'lib/githubService';
import { extractIssueContent } from 'utils/extract';
import Layout from 'styles/layout';
import { Issue, IssueState } from 'types';
import IssueList from './IssueList';

interface MatchParams {
  userId: string;
  repoName: string;
}

const Issues = ({ location, match }: RouteComponentProps<MatchParams>) => {
  const githubService = useRef<GithubService>(new GithubService());
  const [issueState, setIssueState] = useState<IssueState>('open');
  const [issueList, setIssueList] = useState<Issue[]>([]);
  const query = queryString.parse(location.search);
  const { userId, repoName } = match.params;
  const REPOSITORY = `${userId}/${repoName}`;

  useEffect(() => {
    if (query.state === 'open') return;
    else if (query.state === 'closed') setIssueState('closed');
    else if (query.state === 'all') setIssueState('all');
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
    <Layout>
      <IssueList {...{ issueList }} repository={REPOSITORY} />
    </Layout>
  );
};

export default Issues;
