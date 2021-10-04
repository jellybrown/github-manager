import React, { useState } from 'react';
import { Repo } from 'hooks/useRepository';
import SearchBar from './SearchBar';
import RepoList from './RepoList';
import Layout from 'styles/layout';

const Home = () => {
  const [query, setQuery] = useState('');
  const [searchList, setSearchList] = useState<Repo[]>([]);

  return (
    <Layout>
      <SearchBar {...{ query, setQuery, searchList, setSearchList }} />
      <RepoList {...{ searchList }} />
    </Layout>
  );
};

export default Home;
