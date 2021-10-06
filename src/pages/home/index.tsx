import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useRepository, { Repo } from 'hooks/useRepository';
import useModal from 'hooks/useModal';
import Routes from 'constants/routes';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Modal from 'components/Modal';
import SearchBar from './SearchBar';
import RepoList from './RepoList';

const Home = () => {
  const [query, setQuery] = useState('');
  const [searchList, setSearchList] = useState<Repo[]>([]);
  const { repoList, addRepo, removeRepo } = useRepository();
  const { opened, openModal, closeModal } = useModal();

  const history = useHistory();

  const isFavorite = (repo: Repo): boolean => {
    return repoList.some((favorites) => favorites.id === repo.id);
  };

  const toggleRepo = (repo: Repo) => {
    if (isFavorite(repo)) removeRepo(repo.id);
    else {
      if (repoList.length === 4) return openModal();
      addRepo(repo);
    }
  };

  const onClickCancel = () => {
    closeModal();
  };

  const onClickOk = () => {
    closeModal();
    setTimeout(() => {
      history.push(Routes.FAVORITES);
    }, 300);
  };

  return (
    <>
      <Header isHome={true} repoList={repoList} />
      <Layout>
        <SearchBar {...{ query, setQuery, searchList, setSearchList }} />
        <RepoList {...{ searchList, isFavorite, toggleRepo }} />
      </Layout>
      {opened && <Modal {...modal} {...{ onClickOk, onClickCancel }} />}
    </>
  );
};

export default Home;

const modal = {
  content: '즐겨찾기는 4개까지 등록 가능합니다. 삭제 후 다시 추가해주세요.',
  cancleText: '취소',
  okText: '즐겨찾기로 이동',
};
