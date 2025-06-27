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
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
