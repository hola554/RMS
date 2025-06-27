import { Route, Router, Routes, useLocation } from "react-router-dom"
import DashboardPage from "./pages/dashboard"
import { LoginPage } from "./pages/login"
import { Navbar } from "./components/navbar"
import { useState } from "react"


function App() {
  const [displayNavbar, setDisplayNavbar] = useState(false)
  const location = useLocation();
  console.log(location.pathname)
  return (
    <>
      {
        location.pathname === "/login" || location.pathname === "/signup" ? (
          <></>
        ) : (
          <Navbar />
        )
      }
      <div className="">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
