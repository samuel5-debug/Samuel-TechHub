// List.js

import React from 'react';
import './List.css'; // Import the CSS file for styling

function List({ list }) {
  return (
    <div className="list-container">
      {list.length === 0 ? (
        <p className="empty-list-message">The list is empty.</p>
      ) : (
        <ul className="list-items">
          {list.map((item, index) => (
            <li key={index} className="list-item">{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default List;
