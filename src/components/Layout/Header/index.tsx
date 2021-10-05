import React from 'react';
import {
  FavoriteLink,
  HeaderStyle,
  NumberCircle,
  SearchLink,
  UserIcon,
} from './index.style';
import Search from 'assets/icon/search.svg';
import User from 'assets/icon/user.svg';
import Routes from 'constants/routes';
import useRepository from 'hooks/useRepository';

interface HeaderProps {
  isHome: boolean;
}

const Header = ({ isHome }: HeaderProps) => {
  const { repoList } = useRepository();

  return (
    <HeaderStyle>
      {!isHome && (
        <SearchLink to={Routes.HOME}>
          <img src={Search} alt="search page" />
        </SearchLink>
      )}
      <FavoriteLink to={Routes.FAVORITES}>
        <UserIcon>
          <img src={User} alt="favorite page" />
          <NumberCircle length={repoList.length}>
            {repoList.length}
          </NumberCircle>
        </UserIcon>
      </FavoriteLink>
    </HeaderStyle>
  );
};

export default Header;
