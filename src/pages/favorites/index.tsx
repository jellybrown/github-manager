import React from 'react';
import useRepository from 'hooks/useRepository';
import Layout from 'components/Layout';
import MyRepoList from './MyRepoList';

const Favorites = () => {
  const { repoList, removeRepo } = useRepository();

  return (
    <Layout title="Favorites">
      <MyRepoList myRepoList={repoList} {...{ removeRepo }} />
    </Layout>
  );
};

export default Favorites;
