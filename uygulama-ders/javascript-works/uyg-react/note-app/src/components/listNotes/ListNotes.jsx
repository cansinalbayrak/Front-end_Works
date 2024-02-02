import React from 'react';

const ListNotes = ({ notes, onDelete, onEdit }) => {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          
            <div>
              <span>{note.not}</span>
              <button onClick={() => onDelete(note.id)}>Sil</button>
              <button onClick={() => onEdit(note.id)}>Düzenle</button>
            </div>
         
        </li>
      ))}
    </ul>
  );
};

export default ListNotes;
