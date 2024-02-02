import React, { useState } from 'react'
import './newRecipeForm.css'

const NewRecipeForm = ({ AddRecipe, loading }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [error, setError] = useState({ title: '', description: '', image: '' });
    // const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        // kaydetme işleminden sonra sayfanın yeniden yüklenmesini engelliyoruz.
        
        event.preventDefault()

        const trimTitle = title.trim();
        const trimDescription = description.trim();
        const trimImage = image.trim();
      
        if (!trimTitle) {
          setError((prevError) => ({ ...prevError, title: 'title required' }));
        } else {
          setError((prevError) => ({ ...prevError, title: '' }));
        }
      
        setError((prevError) => ({...prevError, description: !trimDescription ? 'description required' : '',}));
      
        setError((prevError) => ({...prevError, image: !trimImage ? 'imageURL required' : '',}));
    
        

        // normalde burada datayı server'a submit ediyoruz.

        if (trimTitle && trimDescription && trimImage) {
          const newRecipe = {
            title: trimTitle,
            description: trimDescription,
            image: trimImage,
          };
          await AddRecipe(newRecipe);
        }
        
        // console.log("Submitting new recipe", {id,title, description, imageUrl});
        // formun içeriğini temizliyoruz.
        setTitle("")
        setDescription("")
        setImage("")
        setError({ title: "", description: "", image: "" });
        

    }
  return (
    <form onSubmit={handleSubmit} className='new-recipe-form'>
        <input  value={title} onChange={(event) => setTitle(event.target.value)} type="text" placeholder='Recipe Title' />
        <p className="error">{error.title}</p>
        <textarea  value={description} onChange={(event) => setDescription(event.target.value)} placeholder='Recipe Description'></textarea>
        <p className="error">{error.description}</p>
        <input  value={image} onChange={(event) => setImage(event.target.value)} type="text" placeholder='Image URL' />
        <p className="error">{error.image}</p>
        <button type='submit'>
        {loading.add ? 'Loading' : 'Add Recipe'}
        </button>
    </form>
  )
}

export default NewRecipeForm