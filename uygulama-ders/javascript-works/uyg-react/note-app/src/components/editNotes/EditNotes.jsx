import React, { useState } from 'react';

const EditNotes = ({ editedNote, saveEditedNote, cancelEdit }) => {

  const [editNote, setEditedContent] = useState(editedNote.not);

  const handleSave = () => {

    saveEditedNote(editedNote.id, editNote);
  };

  return (
    <div>
      <h2>Notu Düzenle</h2>
      <input
        type="number"
        placeholder="Not düzenle"
        value={editNote}
        onChange={(e) => setEditedContent(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={cancelEdit}>Cancel</button>
    </div>
  );
};

export default EditNotes;
