import React from 'react'

import './style.css'

const ErrorMessage = ({ message }) => {
  return (
    <div className="errorMessage">
      <h3>{message}</h3>
    </div>
  )
}

export default ErrorMessage