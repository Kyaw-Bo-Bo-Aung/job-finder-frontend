import React from "react";
import {Button, ButtonGroup} from '@chakra-ui/react';
// import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({ pagesCount, currentPage, onPageChange }) => {
  if (pagesCount === 1) return null;

  pagesCount = pagesCount >= 100 ? 100 : pagesCount;

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const renderPageButtons = () => {
    const buttons = [];
    const maxVisiblePages = 3; 

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(pagesCount, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <Button
          size={{base: 'sm', md: 'sm', lg: 'md'}} 
          borderRadius="0px"
          key={i}
          variant={currentPage === i ? 'solid' : 'outline'}
          colorScheme={currentPage === i ? 'blue' : 'gray'}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Button>
      );
    }

    return buttons;
  };

  return (
    <ButtonGroup spacing="0">
      <Button size={{base: 'sm', md: 'sm', lg: 'md'}} borderRadius="0px" onClick={() => handlePageChange(1)} disabled={currentPage === 1}>{"<"}</Button>
      <Button size={{base: 'sm', md: 'sm', lg: 'md'}}  borderRadius="0px" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>{"<<"}</Button>
      {renderPageButtons()}
      <Button size={{base: 'sm', md: 'sm', lg: 'md'}}  borderRadius="0px" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === pagesCount}>{">>"}</Button>
      <Button size={{base: 'sm', md: 'sm', lg: 'md'}}  borderRadius="0px" onClick={() => handlePageChange(pagesCount)} disabled={currentPage === pagesCount}>{">"}</Button>
    </ButtonGroup>
  );

  // return (
  //   <nav>
  //     <ul className="pagination">
  //       {pages.map(page => (
  //         <Button
  //         key={page}
  //         variant={currentPage === page ? 'solid' : 'outline'}
  //         colorScheme={currentPage === page ? 'blue' : 'gray'}
  //         // onClick={() => handlePageChange(i)}
  //       >
  //         {page}
  //       </Button>
  //         // <li
  //         //   key={page}
  //         // >
  //         //   <a className="page-link" >
  //         //     {page}
  //         //   </a>
  //         // </li>
  //       ))}
  //     </ul>
  //   </nav>
  // );
};

// Pagination.propTypes = {
//   itemsCount: PropTypes.number.isRequired,
//   pageSize: PropTypes.number.isRequired,
//   currentPage: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired
// };

export default Pagination;