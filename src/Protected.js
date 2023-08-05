import React from 'react'
import { Navigate } from 'react-router-dom'
function Protected({ token, children }) {
  if (!token) {
    return <Navigate to="/" replace />
  }
  return children
}
export default Protected