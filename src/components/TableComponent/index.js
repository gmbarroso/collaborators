import React, { useState } from 'react'
import { getCollaboratorById } from '../../requests'
import { useRouter } from '../../hooks'
import { Pagination } from '../../components'
import { useTranslation } from 'react-i18next'

import './style.css'

const Table = ({ columns, data, onClick }) => {   
    const pageSize = 10
    const [ currentPage, setCurrentPage ] = useState(0)
    const router = useRouter()
    const startPointer = currentPage * pageSize;
    const endPointer = startPointer + pageSize
    let dataPerPage = data.slice(startPointer, endPointer)
    const { t } = useTranslation('common')

    const handleColumnTranslation = column => {
        switch(column) {
            case 'name':
                return t('table.name')
            case 'position':
                return t('table.position')
            case 'cpf':
                return t('table.cpf')
            case 'email':
                return t('table.email')
            default:
                return null
        }
    }

    console.log(handleColumnTranslation('name'))

    const renderTableHeader = columns => (
        columns.map((column, index) => {
            console.log(column)
            return <th key={index} className={`th${index}`}>{handleColumnTranslation(column)}</th>
        })
    )

    const renderTableBody = (headers, data) => {
        const goToCollaborator = id => {
            getCollaboratorById(id)
                .then(value => {
                    onClick(data, id)
                    router.push(`/new-collaborator/${id}`)
                })
        }

        const renderRow = (row, headers) => {
            return (
                <tr key={`tr${row.id}`} id={row.id} onClick={() => goToCollaborator(row.id)}>
                    { headers.map((value, index) => {
                        const rowStyle = { display: 'none'}
    
                        if(index === 0) {
                            return <td key={`td${row.id}`} style={rowStyle}>{row[value]}</td>
                        }
    
                        return <td key={index}>{row[value]}</td>
                        })
                    }
                </tr>
            )
        }
        
        return (
            <tbody>
                { data.map((value) => {
                    return renderRow(value, headers);
                    })
                }
            </tbody>
        )
    }

    return (
        <div id="tableContainer" className="tableContainer">
            <table className="table table-bordered table-striped table-hover">
              <thead>
                  <tr>
                      {renderTableHeader(columns)}
                  </tr>
              </thead>
              {renderTableBody(columns, dataPerPage)}
            </table>
            <Pagination
                page = {currentPage}
                setPage = {setCurrentPage}
                size = {Math.ceil(data.length / pageSize)}
                totalItems = {data.length}
                itemPerPage = {dataPerPage.length}
            />
        </div>
    )
}

export default Table