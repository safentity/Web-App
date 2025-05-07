import React from "react"
import ComingSoon from "./pages/Coming-Soon"
import { Routes, Route } from "react-router-dom"
import { Navigate } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/coming-soon" />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </>
  )
}

export default App
