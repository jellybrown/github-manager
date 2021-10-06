import React, { useState } from 'react';
import useRepository, { Repo } from 'hooks/useRepository';
import Layout from 'components/Layout';
import SearchBar from './SearchBar';
import RepoList from './RepoList';
import Header from 'components/Header';

const Home = () => {
  const [query, setQuery] = useState('');
  const [searchList, setSearchList] = useState<Repo[]>([]);
  const { repoList, addRepo, removeRepo } = useRepository();

  const isFavorite = (repo: Repo): boolean => {
    return repoList.some((favorites) => favorites.id === repo.id);
  };

  const toggleRepo = (repo: Repo) => {
    if (isFavorite(repo)) removeRepo(repo.id);
    else addRepo(repo);
  };

  return (
    <>
      <Header isHome={true} repoList={repoList} />
      <Layout>
        <SearchBar {...{ query, setQuery, searchList, setSearchList }} />
        <RepoList {...{ searchList, isFavorite, toggleRepo }} />
      </Layout>
    </>
  );
};

export default Home;
