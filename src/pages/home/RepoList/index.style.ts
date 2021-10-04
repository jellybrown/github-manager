import styled from 'styled-components';
import FillStar from 'assets/icon/star-fill.svg';
import LineStar from 'assets/icon/star-line.svg';

export const Repositories = styled.ul``;

export const Repository = styled.li`
  padding: 30px 55px;
  position: relative;
  border-bottom: 1px solid #696b72;
`;

export const Info = styled.div``;

export const Star = styled.div<{ isFavorite: boolean }>`
  position: absolute;
  left: 10px;
  top: 20px;
  width: 30px;
  height: 30px;
  background-image: ${({ isFavorite }) =>
    isFavorite ? `url(${FillStar})` : `url(${LineStar})`};
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

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
