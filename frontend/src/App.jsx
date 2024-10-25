import { Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import LoginPage from "./pages/auth/LoginPage"
import SignPage from "./pages/auth/SignPage"
import HomePage from "./pages/HomePage"

function App() {


  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </Layout>
  )
}

export default App
