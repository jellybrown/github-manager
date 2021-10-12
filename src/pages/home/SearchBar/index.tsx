import React, { ChangeEvent, KeyboardEvent, useRef } from 'react';
import {
  DeleteButton,
  Input,
  InputWrapper,
  SearchBarWrapper,
  SearchButton,
  ServiceName,
} from './index.style';
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
  const inputRef = useRef<HTMLInputElement | null>(null);
  const githubService = useRef<GithubService>(new GithubService());

  const getLength = (): number => {
    return query.replaceAll(' ', '').length;
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onSearch = async () => {
    if (getLength() === 0) return;
    const data = await githubService.current.search(query);
    const list = extractRepoContent(data.items);
    setSearchList(list);
  };

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onSearch();
  };

  const resetQuery = () => {
    setQuery('');
    if (!inputRef.current) return;
    inputRef.current.focus();
  };

  return (
    <SearchBarWrapper>
      <ServiceName>Github Manager</ServiceName>
      <InputWrapper>
        <Input
          ref={inputRef}
          placeholder="repository 검색..."
          value={query}
          onChange={onChange}
          onKeyPress={(e) => onEnter(e)}
        />
        <DeleteButton
          queryLength={getLength()}
          onClick={resetQuery}
        ></DeleteButton>
      </InputWrapper>
      <SearchButton onClick={onSearch}></SearchButton>
    </SearchBarWrapper>
  );
};

export default SearchBar;
