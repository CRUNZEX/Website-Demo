import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home'
import ContactPage from './pages/Contact';

import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/contact' element={ <ContactPage /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
