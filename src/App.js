import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { About } from './pages/About';
import { NavBar } from './components/NavBar';
import './index.css'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
