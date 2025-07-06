import './App.scss'
import { Navigate, Route, Routes } from 'react-router'
import { Home, Resume } from '@pages'
import { Navbar } from '@components'

export default function App() {

  return (
    <>
      <div className="container mt-2 px-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  )
}
