import { useEffect, useState } from 'react';

export const usePagination = (
  totalElementsCount: number,
  elementsOnSinglePage: number,
  initialPage: number,
): {
  setPageNumber: (pageNumber: number) => void;
  offset: number;
  totalPages: number;
  limit: number;
  pageNumber: number;
} => {
  const [totalPages, setTotalPages] = useState<number>(Math.ceil(totalElementsCount / elementsOnSinglePage));
  const [pageNumber, setPageNumber] = useState(totalPages < initialPage ? totalPages : initialPage);

  useEffect(() => {
    let pagesCount = 1;

    if (totalElementsCount === 0 || elementsOnSinglePage === 0) {
      pagesCount = 1;
    } else {
      pagesCount = Math.ceil(totalElementsCount / elementsOnSinglePage);
    }

    if (pagesCount !== totalPages) {
      setTotalPages(pagesCount);
    }
  }, [totalElementsCount]);

  const setPage = (pageNumb: number) => {
    setPageNumber(pageNumb);
  };

  const offset = pageNumber === 0 ? 0 : elementsOnSinglePage * pageNumber;

  return {
    offset: offset,
    limit: elementsOnSinglePage,
    pageNumber: pageNumber,
    totalPages: totalPages,
    setPageNumber: setPage,
  };
};
