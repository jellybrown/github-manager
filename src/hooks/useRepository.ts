import { useEffect, useState } from 'react';

export interface Repo {
  id: number;
  fullName: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  language: string;
  stargazersCount: number;
  authorAvatarUrl: string;
}

// repoList 상태가 변할 때마다 localStorage도 갱신
const useRepository = () => {
  const [repoList, setRepoList] = useState<Repo[]>([]);

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    localStorage.setItem('repo', JSON.stringify(repoList));
  }, [repoList]);

  const addRepo = (repo: Repo) => {
    setRepoList((prev: Repo[]) => [...prev, repo]);
  };

  const removeRepo = (id: number) => {
    setRepoList((prev: Repo[]) => prev.filter((repo) => repo.id !== id));
  };

  const load = () => {
    const data = localStorage.getItem('repo');
    if (data === null) return;
    const initialRepo = JSON.parse(data);
    setRepoList(initialRepo);
  };

  return { repoList, addRepo, removeRepo };
};

export default useRepository;
