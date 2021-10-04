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
