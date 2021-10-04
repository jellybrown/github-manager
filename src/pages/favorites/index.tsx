import React from 'react';
import Layout from 'styles/layout';
import useRepository from 'hooks/useRepository';
import MyRepoList from './MyRepoList';

const Favorites = () => {
  const { repoList, removeRepo } = useRepository();

  return (
    <Layout>
      <MyRepoList myRepoList={repoList} {...{ removeRepo }} />
    </Layout>
  );
};

export default Favorites;
