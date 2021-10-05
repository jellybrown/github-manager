import React from 'react';
import {
  UserAvatar,
  UserName,
  Number,
  StateColor,
  SubInfo,
  Title,
  RepoName,
  Info,
  IssueItem,
  Issues,
  IssueLink,
} from './index.style';
import { Issue } from 'types';

interface IssueListProps {
  issueList: Issue[];
  repository: string;
}

const IssueList = ({ issueList, repository }: IssueListProps) => {
  return (
    <Issues>
      {issueList.map((issue) => (
        <IssueItem>
          <IssueLink href={issue.htmlUrl} target="_blank" rel="noreferrer">
            <Info>
              <RepoName>{repository}</RepoName>
              <Title>{issue.title}</Title>
            </Info>
            <SubInfo>
              <StateColor state={issue.state}></StateColor>
              <Number>#{issue.number}</Number>
              <UserName>by {issue.user}</UserName>
            </SubInfo>
            <UserAvatar>
              <img src={issue.avatarUrl} alt="user" />
            </UserAvatar>
          </IssueLink>
        </IssueItem>
      ))}
    </Issues>
  );
};

export default IssueList;
