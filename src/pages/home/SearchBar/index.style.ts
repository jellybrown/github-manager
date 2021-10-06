import styled from 'styled-components';
import Search from 'assets/icon/search.svg';
import Delete from 'assets/icon/delete.svg';

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

export const ServiceName = styled.h1`
  color: #bbbbbb;
  font-size: 22px;
  font-weight: 300;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 50%;
  min-width: 400px;
  margin: 0 25px;
`;

export const Input = styled.input`
  background: #393b4a;
  padding: 18px 25px;
  width: 100%;
  border-radius: 8px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);

  &::placeholder {
    color: rgba(255, 255, 255, 0.1);
  }
`;

export const DeleteButton = styled.button<{ queryLength: number }>`
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
  width: 13px;
  height: 13px;
  background-image: url(${Delete});
  background-size: 100%;
  background-repeat: no-repeat;
  cursor: pointer;
  opacity: 0.3;
  transition: 0.2s;
  transition-delay: 0.1s;
  visibility: ${({ queryLength }) => (queryLength > 0 ? 'visible' : 'hidden')};

  &:hover {
    opacity: 0.5;
  }
`;

export const SearchButton = styled.button`
  width: 25px;
  height: 25px;
  background-image: url(${Search});
  background-size: 100%;
  background-repeat: no-repeat;
  cursor: pointer;
  opacity: 0.3;
  transition: 0.5s;

  &:hover {
    opacity: 0.7;
  }
`;
