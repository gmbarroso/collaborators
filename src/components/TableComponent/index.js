import React, { useState, useEffect } from 'react'
import { getCollaboratorById } from '../../requests'
import { useRouter } from '../../hooks'
import { Pagination } from '../../components'

import './style.css'

const Table = ({ columns, data, onClick }) => {
    
    const pageSize = 5
    const [currentPage, setCurrentPage] = useState(0)
    const [ updateData, setUpdateData ] = useState(data)
    const router = useRouter()
    const renderTableHeader = columns => (
        columns.map((column, index) => {
            return <th key={index} className={`th${index}`}>{column.charAt(0).toUpperCase()}{column.slice(1)}</th>
        })
    )
    
    const startPointer = currentPage * pageSize;
    const endPointer = startPointer + pageSize
    let dataPerPage = data.slice(startPointer, endPointer)

    console.log(dataPerPage)

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