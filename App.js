import React, { useState } from 'react';
import List from './List';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleAddItem = () => {
    if (input.trim()) {
      setList([...list, input]);
      setInput(''); // Clear input field after submission
    }
  };

  return (
    <div className="app-container">
      <h1>Dynamic List Manager</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter item..."
          className="input-field"
        />
        <button onClick={handleAddItem} className="add-button">Add Item</button>
      </div>
      <List list={list} />
    </div>
  );
}

export default App;
