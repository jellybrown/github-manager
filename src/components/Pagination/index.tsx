import React from 'react';
import { Number, Page, PageList } from './index.style';

interface PaginationProps {
  length: number;
  limit: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({
  length,
  limit,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const pages = Math.ceil(length / limit);

  return (
    <PageList>
      {[...Array(pages)].map((_, i) => (
        <Page key={i}>
          <Number
            href="#a"
            isActive={currentPage === i + 1}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </Number>
        </Page>
      ))}
    </PageList>
  );
};

export default Pagination;
