import React from 'react';
import {
  Avatar,
  UpdatedAt,
  SubInfo,
  Description,
  Language,
  RepoName,
  TitleArea,
  Info,
  Repositories,
  Repository,
  DeleteButton,
  RepoLink,
} from './index.style';
import Delete from 'assets/icon/delete.svg';
import { Repo } from 'hooks/useRepository';

interface MyRepoListProps {
  myRepoList: Repo[];
  removeRepo: (id: number) => void;
}

const MyRepoList = ({ myRepoList, removeRepo }: MyRepoListProps) => {
  return (
    <Repositories>
      {myRepoList.map((repo) => (
        <Repository key={repo.id}>
          <RepoLink to={`/favorites/${repo.fullName}/issues`}>
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
            <DeleteButton onClick={() => removeRepo(repo.id)}>
              <img src={Delete} alt="delete button" />
            </DeleteButton>
          </RepoLink>
        </Repository>
      ))}
    </Repositories>
  );
};

export default MyRepoList;
