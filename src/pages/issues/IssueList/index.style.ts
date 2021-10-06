import styled from 'styled-components';
import Check from 'assets/icon/check.svg';
import { IssueState } from 'types';

export const Issues = styled.ul`
  padding: 20px;
`;

export const IssueItem = styled.li`
  border: 1px solid #4f4f4f;
  border-radius: 10px;
  margin-bottom: 20px;
  position: relative;
  transition: 0.3s;
  &:hover {
    background-color: #262938;
  }
`;

export const IssueLink = styled.a`
  padding: 20px 30px;
  display: block;
  width: 100%;
`;

export const Info = styled.div`
  height: 100px;
`;

export const RepoName = styled.h2`
  color: #c6c6c6;
  font-size: 14px;
  margin-bottom: 13px;
`;

export const Title = styled.h3`
  color: #fff;
`;

export const SubInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const StateColor = styled.div<{ state: IssueState }>`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ state }) =>
    state === 'closed' ? `url(${Check})` : 'none'};
  background-color: ${({ state }) =>
    state === 'open' ? '#60BBA7' : state === 'closed' ? '#E46A6A' : 'none'};
`;

export const Number = styled.span`
  color: #fff;
  display: inline-block;
  margin: 0 10px;
`;

export const UserName = styled.span`
  color: #8e8e8e;
  display: inline-block;
`;

export const UserAvatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 30px;
  bottom: 20px;

  > img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
`;
