import './App.css'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios';
import Navbar from './components/navbar'
import IndexPage from './pages/IndexPage'

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;
function App() {

  return (
    <div className='min-h-screen'>
        <Navbar />
          <Routes>
            <Route index element={<IndexPage />} />
          </Routes>
    </div>
  )
}

export default App
