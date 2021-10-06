import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 40px;
`;

export const StateButton = styled.button<{ isActive: boolean }>`
  padding: 5px 13px;
  margin: 0 5px;
  color: #fff;
  border-radius: 5px;
  background: ${({ isActive }) => (isActive ? '#393B4A' : 'none')};
  opacity: ${({ isActive }) => (isActive ? '1' : '0.6')};
  cursor: pointer;
  transition: 0.3s;
`;
