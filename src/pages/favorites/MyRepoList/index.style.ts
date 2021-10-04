import styled from 'styled-components';

export const Repositories = styled.ul``;

export const Repository = styled.li`
  padding: 30px;
  position: relative;
  border: 1px solid #4f4f4f;
  border-radius: 10px;
  width: 400px;
`;

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
  font-size: 16px;
  color: #8e8e8e;
  height: 80px;
  padding-top: 10px;
`;

export const SubInfo = styled.div`
  display: flex;
  align-items: center;
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
