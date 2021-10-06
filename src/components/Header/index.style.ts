import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyle = styled.header`
  background: #181a26;
  position: relative;
  z-index: 10;
`;

export const SearchLink = styled(Link)`
  margin: 23px;
  display: inline-block;
  opacity: 0.3;
  transition: 0.3s;

  > img {
    width: 23px;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const FavoriteLink = styled(Link)`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const UserIcon = styled.div`
  position: relative;

  > img {
    width: 33px;
  }
`;

export const NumberCircle = styled.span<{ length: number }>`
  opacity: ${({ length }) => (length > 0 ? '1' : '0')};
  position: absolute;
  right: -6px;
  top: -3px;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  color: #fff;
  background: #e46a6a;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
