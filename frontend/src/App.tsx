import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/Login';
// import ProductTable from './components/ProductTable';
// import SupplierPage from './components/SupplierPage';
// import ProtectedRoute from './components/ProtectedRoute';
import './App.css'
import Dashboard2 from './pages/Dashbord2';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard2 />}></Route>
        {/* <Route path="/" element={<Login />}></Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/products" element={<ProductTable />}></Route>
          <Route path="/suppliers" element={<SupplierPage />}></Route>
          
        </Route>
        <Route path="*" element={<Login />} /> */}
      </Routes>
    </Router>
  );
};

export default App
