import React from 'react';
import {
  Avatar,
  Description,
  Info,
  Language,
  RepoName,
  Repositories,
  Repository,
  Star,
  SubInfo,
  TitleArea,
  UpdatedAt,
} from './index.style';
import { Repo } from 'hooks/useRepository';

interface RepoListProps {
  searchList: Repo[];
  isFavorite: (repo: Repo) => boolean;
  toggleRepo: (repo: Repo) => void;
}

const RepoList = ({ searchList, isFavorite, toggleRepo }: RepoListProps) => {
  return (
    <Repositories>
      {searchList.map((repo) => (
        <Repository key={repo.id}>
          <Star
            isFavorite={isFavorite(repo)}
            onClick={() => toggleRepo(repo)}
          />
          <Info>
            <TitleArea>
              <RepoName>{repo.fullName}</RepoName>
              <Language>{repo.language}</Language>
            </TitleArea>
            <Description>{repo.description}</Description>
          </Info>
          <SubInfo>
            <UpdatedAt>{repo.updatedAt}</UpdatedAt>
            <Avatar src={repo.authorAvatarUrl} />
          </SubInfo>
        </Repository>
      ))}
    </Repositories>
  );
};

export default RepoList;
