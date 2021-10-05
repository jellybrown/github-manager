import React, { useState } from 'react';
import { Repo } from 'hooks/useRepository';
import Layout from 'components/Layout';
import SearchBar from './SearchBar';
import RepoList from './RepoList';

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
