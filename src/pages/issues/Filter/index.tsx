import React, { MouseEvent } from 'react';
import { FilterWrapper, StateButton } from './index.style';
import { IssueState } from 'types';

interface FilterProps {
  issueState: IssueState;
  setIssueState: React.Dispatch<React.SetStateAction<IssueState>>;
}
const Filter = ({ issueState, setIssueState }: FilterProps) => {
  const onClickFilter = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement;
    const data = target.getAttribute('data-state') as IssueState;
    setIssueState(data);
  };
  return (
    <FilterWrapper>
      <StateButton
        data-state={IssueState.All}
        isActive={IssueState.All === issueState}
        onClick={(e) => onClickFilter(e)}
      >
        {IssueState.All}
      </StateButton>
      <StateButton
        data-state={IssueState.Open}
        isActive={IssueState.Open === issueState}
        onClick={(e) => onClickFilter(e)}
      >
        {IssueState.Open}
      </StateButton>
      <StateButton
        data-state={IssueState.Closed}
        isActive={IssueState.Closed === issueState}
        onClick={(e) => onClickFilter(e)}
      >
        {IssueState.Closed}
      </StateButton>
    </FilterWrapper>
  );
};

export default Filter;
