import { Route, Router, Routes, useLocation } from "react-router-dom"
import DashboardPage from "./pages/dashboard"
import { LoginPage } from "./pages/login"
import { Navbar } from "./components/navbar"
import { useState } from "react"
import { Sidebar } from "./components/sidebar"
import { AccountManagement } from "./pages/superadmin/accountManagement"
import { StudentsRecord } from "./pages/studentsRecord"


function App() {
  const [displayNavbar, setDisplayNavbar] = useState(false)
  const location = useLocation();
  console.log(location.pathname)
  return (
    <>
      <div className="flex">
        {
          location.pathname === "/login" || location.pathname === "/signup" ? (
            <></>
          ) : (
            <Sidebar />
          )
        }
        <div className="w-full">
          {
            location.pathname === "/login" || location.pathname === "/signup" ? (
              <></>
            ) : (
              <Navbar />
            )
          }
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/manageaccount" element={<AccountManagement />} />
            <Route path="/studentRecord" element={<StudentsRecord/>} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
