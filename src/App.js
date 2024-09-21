import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/items" element={<ItemList />} />
        <Route path="/items/add" element={<ItemForm />} />
        <Route path="/items/edit/:id" element={<ItemForm />} />
      </Routes>
    </Router>
  );
};

export default App;
