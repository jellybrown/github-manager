import styled from 'styled-components';

export const PageList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 25px 0;
`;

export const Page = styled.li`
  display: inline-block;
  margin: 5px;
`;

export const Number = styled.a<{ isActive: boolean }>`
  font-size: 14px;
  display: inline-block;
  padding: 8px 10px;
  border-radius: 5px;
  background: ${({ isActive }) =>
    isActive ? 'rgba(255, 255, 255, 0.15)' : 'none'};
  color: rgba(255, 255, 255, 0.6);

  &:hover {
    background: ${({ isActive }) =>
      isActive ? 'auto' : 'rgba(255,255,255,0.06)'};
  }
`;
