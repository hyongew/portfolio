import { Navigate, Route, Routes } from "react-router"
import { Home, Resume } from "@pages"
import { Navbar } from "@components"
import "./App.scss"

export default function App() {

  return (
    <>
      <div className="container">
        <Navbar />
        <h1 className="display-4 mt-5 mb-3"><strong>Hong Yew</strong> Tan</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  )
}