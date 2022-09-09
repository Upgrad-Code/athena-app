import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import NavBar from './components/NavBar/NavBar';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <NavBar />
      <HomePage />
      <ProductPage />

      {/* <Switch>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/">
          <ProductPage />
        </Route>
      </Switch> */}
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes> */}
    </div>
  );
}
