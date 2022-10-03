import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import DetailsLogement from './pages/DetailsLogement'
import Logement from './pages/Logement'
import Propos from './pages/Propos'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="/logement/details-logement" element={<DetailsLogement />} />
        <Route path="/a-propos" element={<Propos />} />
      </Routes>
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

