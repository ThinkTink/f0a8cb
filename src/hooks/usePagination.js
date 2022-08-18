export const DOTS = "...";

function usePagination({ currentPage, totalCount, pageSize }) {
  /*
    Rewrite the logic here to map out the pagination to be displayed

    !!!!!! ATTENTION !!!!!!
   The list of buttons will be generated by the usePagination hook.
   With the division of the totalCount by the pageSize, we can determine the number of pages.
   - If the total pages is less than 3, we can display all the pages.
   Otherwise:
   - If the currentPage is lower than 2, we will display the first N pages followed by "DOTS", then the last page. [1, 2, 3, DOTS, totalPages]
   - When the currentPage is higher than the total of pages minus 2 pages before, we will display the first page, then "DOTS", then the last N pages. [1, ... ,totalPages-2,totalPages-1,totalPages]
   - Finally, if the currentPage is between the first and last N pages, we will display the first page, then "DOTS", then the current page, then "DOTS", then the last page. [1, ... ,currentPage-1,currentPage,currentPage+1, ... ,totalPages]    
  */
  const totalPages = Math.ceil(totalCount / pageSize);
  let paginationArray = [];
  if (totalPages <= 3) {
    for (let i = 1; i <= totalPages; i++) {
      paginationArray.push(i);
    }
  } else {
    if (currentPage <= 2) {
      for (let i = 1; i <= 3; i++) paginationArray.push(i);
      paginationArray = [...paginationArray, DOTS, totalPages];
    } else if (currentPage >= totalPages - 2) {
      paginationArray.push(1);
      paginationArray.push(DOTS);
      for (let i = totalPages - 2; i <= totalPages; i++)
        paginationArray.push(i);
    } else {
      paginationArray = [
        1,
        DOTS,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        DOTS,
        totalPages,
      ];
    }
  }
  return paginationArray;
}

export default usePagination;
