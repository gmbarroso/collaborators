import React from 'react'
import { Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import './style.css'

const Pagination = ({ page, setPage, size, totalItems, itemPerPage }) => {
  const { t } = useTranslation('common')

  const handlePageButton = () => {
    return Array(size).fill(0).map((_, i) => (
        <Button key={i} className="paginationBtn" size="sm" onClick={() => setPage(i)}>
          {i}
        </Button>
    ))
  }

  return (
    <div className="paginator">
      <div className="paginationText">
        <span>{t('pagination.collaboratorsPerPage')}{itemPerPage}</span>
        <span>{t('pagination.numberOfCollaborators')}{totalItems}</span>
      </div>
      {handlePageButton()}
    </div>
  );
}

export default Pagination;