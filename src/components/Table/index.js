import React from 'react'

import './style.css'

const renderColumns = columns => (
    columns.map((column, index) => {
        return <th key={index}>{column.charAt(0).toUpperCase()}{column.slice(1)}</th>
    })
)

const Table = ({ columns }) => (
    <div className="tableContainer">
        <table className="table table-bordered table-striped table-hover">
          <thead>
              <tr>
                  {renderColumns(columns)}
              </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
            </tr>
          </tbody>
        </table>
    </div>
)

export default Table