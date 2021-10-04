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
  const { repoList, addRepo, removeRepo } = useRepository();

  const isFavorite = (repo: Repo): boolean => {
    return repoList.some((favorites) => favorites.id === repo.id);
  };

  const toggleRepo = (repo: Repo) => {
    if (isFavorite(repo)) removeRepo(repo.id);
    else addRepo(repo);
  };

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
