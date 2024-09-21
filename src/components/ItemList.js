
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Items = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await axios.get('https://qa-test-9di7.onrender.com/items', {
      headers: { Authorization: `Bearer ${token}` }
    });
    setItems(res.data);
  };

  const createItem = async () => {
    await axios.post('https://qa-test-9di7.onrender.com/items', { name: itemName }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchItems();
  };

  return (
    <div>
      <h2>Items</h2>
      <input type="text" value={itemName} onChange={e => setItemName(e.target.value)} placeholder="Item name" />
      <button onClick={createItem}>Create Item</button>
      <ul>
        {items.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
};

export default Items;

