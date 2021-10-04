import React, { ChangeEvent } from 'react';
import GithubService from 'lib/githubService';
import { extractRepoContent } from 'utils/extract';
import { Repo } from 'hooks/useRepository';

interface SearchBarProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  searchList: Repo[];
  setSearchList: React.Dispatch<React.SetStateAction<Repo[]>>;
}

const SearchBar = ({
  query,
  setQuery,
  searchList,
  setSearchList,
}: SearchBarProps) => {
  const githubService = new GithubService();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onSearch = async () => {
    if (query.replaceAll(' ', '').length === 0) return;
    const data = await githubService.search(query);
    const list = extractRepoContent(data.items);
    setSearchList(list);
  };

  return (
    <>
      <input value={query} onChange={onChange} />
      <button onClick={onSearch}>검색</button>
    </>
  );
};

export default SearchBar;
