import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import DetailsLogement from './pages/DetailsLogement'
import Logement from './pages/Logement'
import Propos from './pages/Propos'
import Error from './components/Error'
import Header from './components/Header'
import Footer from './components/Footer'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="/logement/details-logement" element={<DetailsLogement />} />
        <Route path="/a-propos" element={<Propos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

