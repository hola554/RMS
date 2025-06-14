import { Route, Router, Routes } from "react-router-dom"
import DashboardPage from "./pages/dashboard"
import { LoginPage } from "./pages/login"


function App() {

  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard" element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
