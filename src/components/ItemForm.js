import React, { useState } from 'react';
import axios from 'axios';

const ItemForm = ({ item, onSave }) => {
  const [name, setName] = useState(item ? item.name : '');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (item) {
        await axios.put(`/api/items/${item.id}`, { name }); 
        setMessage('Item updated successfully!');
      } else {
        await axios.post('/api/items', { name });
        setMessage('Item created successfully!');
      }
      onSave();
    } catch (error) {
      setMessage('Failed to save item!');
    }
  };

  return (
    <div>
      <h2>{item ? 'Edit Item' : 'Add Item'}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Item Name" />
        <button type="submit">{item ? 'Update' : 'Create'}</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ItemForm;
