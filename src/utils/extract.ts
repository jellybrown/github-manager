import { Issue, IssueState } from 'types';
import { Repo } from 'hooks/useRepository';

export const extractRepoContent = (data: any[]): Repo[] => {
  console.log(data);
  return data.map((item) => {
    return {
      id: item.id,
      fullName: item.full_name,
      description: item.description,
      createdAt: item.created_at,
      updatedAt: item.updated_at,
      language: item.language,
      stargazersCount: item.stargazers_count,
      authorAvatarUrl: item.owner.avatar_url,
    };
  });
};

export const extractIssueContent = (data: any[]): Issue[] => {
  return data.map((item) => {
    return {
      htmlUrl: item.html_url,
      state: item.state as IssueState,
      title: item.title,
      number: item.number,
      user: item.user.login,
      avatarUrl: item.user.avatar_url,
    };
  });
};
