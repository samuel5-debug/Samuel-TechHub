import React, { useState } from 'react';
import './App.css'; // you can still keep styles here if you like

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
    }
  };

  return (
    <div className="app-container">
      <h1>Dynamic List Manager</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Type something..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>

      <div className="list-container">
        {items.length === 0 ? (
          <p className="empty-list-message">The list is empty.</p>
        ) : (
          <ul className="list-items">
            {items.map((item, index) => (
              <li key={index} className="list-item">{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
