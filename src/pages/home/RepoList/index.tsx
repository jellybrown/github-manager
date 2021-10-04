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
import useRepository, { Repo } from 'hooks/useRepository';

interface RepoListProps {
  searchList: Repo[];
}

const RepoList = ({ searchList }: RepoListProps) => {
  const { repoList } = useRepository();

  const isFavorite = (repo: Repo): boolean => {
    return repoList.some((favorites) => favorites.id === repo.id);
  };
  return (
    <Repositories>
      {searchList.map((repo) => (
        <Repository key={repo.id}>
          <Star isFavorite={isFavorite(repo)} />
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
