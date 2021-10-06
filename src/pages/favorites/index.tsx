import React from 'react';
import useRepository from 'hooks/useRepository';
import Layout from 'components/Layout';
import Header from 'components/Header';
import MyRepoList from './MyRepoList';

const Favorites = () => {
  const { repoList, removeRepo } = useRepository();

  return (
    <>
      <Header isHome={false} repoList={repoList} />
      <Layout title="Favorites">
        <MyRepoList myRepoList={repoList} {...{ removeRepo }} />
      </Layout>
    </>
  );
};

export default Favorites;
