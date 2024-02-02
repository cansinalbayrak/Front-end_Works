import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/card/card';
import Header from './components/header/Header'
import Home from './components/home/Home'
import RecipeList from './components/recipe-list/RecipeList'
import NewRecipeForm from './components/newRecipeForm/NewRecipeForm';
import axios from 'axios'
import EditRecipe from './components/editRecipe/EditRecipe';

function App() {

  const [recipes, setRecipes] =  useState([])
  const [editedRecipe, setEditedRecipe] = useState(null);
  const [loading, setLoading] = useState({ main: false, delete: false, add: false });

  useEffect(() => {
    const getRecipe = async () =>
    {
      setLoading((prevLoading)=>({...prevLoading, main:true}));
      // API fetch isteğini simüle ediyoruz. Sonra buraya axios isteği ekleyeceğiz.
      await axios.get("http://localhost:3001/recipes").then(res => setRecipes(res.data))
      .catch(err => {
        console.log("get error")
      });
      setLoading((prevLoading)=>({...prevLoading, main:false}));
    }

    getRecipe();
    
  //setRecipes(fakeRecipes)
  }, [])

  const AddRecipe = async (newRecipe) => {
    setLoading((prevLoading)=>({...prevLoading, add:true}));
      const response = await axios.post("http://localhost:3001/recipes", newRecipe)
      .catch(err => {
        console.log("add error")
      });
      
      setRecipes(prevRecipes => [...prevRecipes, response.data]); //set içinde arrow func kullanımı güncel arrayi çekmeye yarar. aynı anda 2 sil yapınca mesela günceli çeker ve doğru işlemi yapar.
    setLoading((prevLoading)=>({...prevLoading, add:false}));
  };

  const deleteRecipe = async (id) => {
    setLoading((prevLoading)=>({...prevLoading, delete:true}));
      await axios.delete(`http://localhost:3001/recipes/${id}`)
      .catch(err => {
        console.log("delete error")
      });
      setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== id));
    setLoading((prevLoading)=>({...prevLoading, delete:false}));
  };


  const updateRecipe =  (id) => {
    const recipeToEdit = recipes.find((recipe) => recipe.id === id);
    //console.log(recipeToEdit);
    setEditedRecipe({ id, title: recipeToEdit.title, description:recipeToEdit.description, image:recipeToEdit.image });

  };

  const saveEditedRecipe = async (id, editedRecipe) => {
     await axios.put(`http://localhost:3001/recipes/${id}`, editedRecipe)
    .then(res => setRecipes(recipes => recipes.map(recipe => (recipe.id === id ?  res.data : recipe))))
      .catch(err => {
        console.log("update error")
      });

      
      setEditedRecipe(null);
  };
  const cancelEdit = () => {
    setEditedRecipe(null);
  };

  return (
    <div >
      <Header/>

      <div className='main-div'>

      {loading.main ? 
        <p>Waiting for Cards</p> : 
        <>
          <Home />
          <NewRecipeForm AddRecipe={AddRecipe} loading = {loading} />
          <RecipeList recipes={recipes} onDelete={deleteRecipe} onEdit={updateRecipe} loading = {loading} />
          {editedRecipe !== null ? (
            <EditRecipe
              editedRecipe={editedRecipe}
              saveEditedRecipe={saveEditedRecipe}
              cancelEdit={cancelEdit}
            />
          ) : null}
        </>
      }
      
      </div>
    </div>
  )
}

export default App