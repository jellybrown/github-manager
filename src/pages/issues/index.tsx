import React, { useCallback, useEffect, useRef, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import queryString from 'query-string';
import styled from 'styled-components';
import GithubService from 'lib/githubService';
import { extractIssueContent } from 'utils/extract';
import { Issue, IssueState } from 'types';
import Layout from 'components/Layout';
import IssueList from './IssueList';
import useRepository from 'hooks/useRepository';
import Header from 'components/Header';
import Filter from './Filter';
import Pagination from 'components/Pagination';

interface MatchParams {
  userId: string;
  repoName: string;
}

const Issues = ({ location, match }: RouteComponentProps<MatchParams>) => {
  const { repoList } = useRepository();
  const githubService = useRef<GithubService>(new GithubService());
  const [issueState, setIssueState] = useState<IssueState>(IssueState.Open);
  const [issueList, setIssueList] = useState<Issue[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const query = queryString.parse(location.search);
  const { userId, repoName } = match.params;
  const REPOSITORY = `${userId}/${repoName}`;

  useEffect(() => {
    setCurrentPage(1);
  }, [issueState]);

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
        <IssueList
          issueList={renderIssues(issueList, currentPage)}
          repository={REPOSITORY}
        />
        {issueList.length === 0 && (
          <Message>현재 {issueState} 이슈가 없네요.</Message>
        )}
        <Pagination
          length={issueList.length}
          limit={LIMIT}
          {...{ currentPage, setCurrentPage }}
        />
      </Layout>
    </>
  );
};

export default Issues;

const LIMIT = 5;
const renderIssues = (issues: Issue[], page: number): Issue[] => {
  const START_NUMBER = LIMIT * (page - 1);
  return issues.slice(START_NUMBER, START_NUMBER + LIMIT);
};

const Message = styled.h3`
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  margin-top: 50px;
  transition: 0.5s;
  transition-delay: 1s;
  opacity: 0.4;
`;
