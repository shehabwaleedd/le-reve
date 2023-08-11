import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Suspense } from 'react';
import Loading from './components/loading/Loading.tsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<Loading height={100} />}>
        <App />
      </Suspense>
    </Router>
  </React.StrictMode >
);

reportWebVitals();
