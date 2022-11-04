//Importations
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import '../src/style/scss/style.scss'
import Home from './pages/Home'
import Lodging from './pages/Lodging'
import About from './pages/About'
import Error from './pages/Error'
import Header from './layout/Header'
import Footer from './layout/Footer'

//Route vers les différentes pages du site
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lodging/:id" element={<Lodging />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
    
  </React.StrictMode>
);



