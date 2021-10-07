import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Repositories = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 980px;
  margin: 0 auto;
`;

export const Repository = styled.li`
  position: relative;
  width: 450px;
  padding: 30px;
  border: 1px solid #4f4f4f;
  border-radius: 10px;
  margin: 20px;
  display: inline-block;
  transition: 0.4s;

  &:hover {
    background-color: #262938;
    border: 1px solid #262938;
  }
`;

export const RepoLink = styled(Link)``;

export const Info = styled.div``;

export const TitleArea = styled.div`
  display: flex;
  align-items: center;
`;

export const RepoName = styled.h2`
  font-size: 20px;
  color: #fff;
  display: inline-block;
  margin-right: 15px;
`;

export const Language = styled.span`
  font-size: 14px;
  color: #8e8e8e;
`;

export const Description = styled.p`
  font-size: 15px;
  font-weight: 300;
  line-height: 1.3;
  color: #8e8e8e;
  height: 120px;
  padding-top: 10px;
`;

export const SubInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UpdatedAt = styled.span`
  font-size: 14px;
  line-height: 13px;
  color: #8e8e8e;
  margin-right: 15px;
`;

export const Avatar = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 50%;
`;

export const DeleteButton = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 15px;
  height: 15px;
  cursor: pointer;

  > img {
    width: 100%;
  }
`;
