import React from 'react'
import { Button } from 'react-bootstrap'

import './style.css'

const Pagination = ({ page, setPage, size, totalItems, itemPerPage }) => {
  return (
    <div className="paginator">
      <div className="paginationText">
        <span>Collaborators per page: {itemPerPage}</span>
        <span>Number of collaborators: {totalItems}</span>
      </div>
      {
        Array(size).fill(0).map((_, i) => (
          <Button key={i} className="paginationBtn" size="sm" onClick={() => setPage(i)}>
            {i}
          </Button>
        ))
      }
    </div>
  );
}

export default Pagination;