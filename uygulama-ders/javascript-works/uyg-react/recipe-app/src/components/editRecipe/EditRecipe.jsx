import React, { useState } from "react";
import "./editRecipe.css"

const EditRecipe = ({ editedRecipe, saveEditedRecipe, cancelEdit }) => {
  const [editedTitle, setEditedTitle] = useState(editedRecipe.title);
  const [editedDescription, setEditedDescription] = useState(editedRecipe.description);
  const [editedImageUrl, setEditedImageUrl] = useState(editedRecipe.image);

  const handleSave = () => {
    saveEditedRecipe(editedRecipe.id, {
      title: editedTitle,
      description: editedDescription,
      image: editedImageUrl,
    });
  };

  return (
    <div className="edit-div">
      <h2>Edit Recipe</h2>

      <label>Title:</label>
      <input
        type="text"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
      />



      <label>Description:</label>
      <textarea
        value={editedDescription}
        onChange={(e) => setEditedDescription(e.target.value)}
      ></textarea>


      <label>Image URL:</label>
      <input
        type="text"
        value={editedImageUrl}
        onChange={(e) => setEditedImageUrl(e.target.value)}
      />
      <button className="edit-save-btn" onClick={handleSave}>Save</button>
      <button className="edit-cancel-btn" onClick={cancelEdit}>Cancel</button>
    </div>
  );
};

export default EditRecipe;
