import React from 'react'
import { getCollaboratorById } from '../../requests'
import { useRouter } from '../../hooks'

import './style.css'

const Table = ({ columns, data, onClick }) => {
    const router = useRouter()
    const renderTableHeader = columns => (
        columns.map((column, index) => {
            return <th key={index} className={`th${index}`}>{column.charAt(0).toUpperCase()}{column.slice(1)}</th>
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
                { data && data.map((value) => {
                    return renderRow(value, headers);
                    })
                }
            </tbody>
        )
    }

    return (
        <div className="tableContainer">
            <table className="table table-bordered table-striped table-hover">
              <thead>
                  <tr>
                      {renderTableHeader(columns)}
                  </tr>
              </thead>
              {renderTableBody(columns, data)}
            </table>
        </div>
    )
}

export default Table