import { useState } from 'react'
import './App.css'
import ListNotes from './components/listNotes/ListNotes'
import AddNotes from './components/addNotes/AddNotes'
import EditNotes from './components/editNotes/EditNotes'

function App() {
  const [notes, setNotes] = useState([]);
  const [editedNote, setEditedNote] = useState(null);

  const addNote = (not) => {
    setNotes([...notes, { id: Date.now(), not }]);
  };

  const deleteNote = (id) => {
    const newState = notes.filter((note) => note.id !== id);
    setNotes(newState);
  };

  const editNote = (id) => {
    const noteToEdit = notes.find((note) => note.id === id);
    setEditedNote({ id, not: noteToEdit.not });
  };

  const saveEditedNote = (id, editedNot) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, not: editedNot } : note);
    setNotes(updatedNotes);
    setEditedNote(null);
  };

  const cancelEdit = () => {
    setEditedNote(null);
  };


  return (
    <div>
      <h1>Notes App</h1>

      <AddNotes onAddNote = {addNote} />

      <h2>Notlarim</h2>

      {notes.length ===0 ? (<p>Henüz not eklenmedi.</p>) : 
      (<ListNotes notes = {notes} onDelete = {deleteNote} onEdit={editNote} />)}
      

      {editedNote !== null ? (
        <EditNotes
          editedNote={editedNote}
          saveEditedNote={saveEditedNote}
          cancelEdit={cancelEdit}
        />
      ) : null}


    </div>
  )
}

export default App
