import React, { useState } from 'react';

const AddNotes = ({ onAddNote }) => {
  const [not, setNot] = useState('');

  const handleAddNote = (event) => {
      event.preventDefault()
      onAddNote(not);
      setNot('');
    
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Not ekle"
        value={not}
        onChange={(e) => setNot(e.target.value)}
      />
      <button onClick={handleAddNote}>Ekle</button>
    </div>
  );
};

export default AddNotes;
