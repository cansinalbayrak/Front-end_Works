import React from 'react'
import Card from '../card/card'
import './RecipeList.css'


const RecipeList = ({recipes, onDelete, onEdit, loading}) => {
  return (
    
       <div className="recipe-list">

        {recipes.map((recipe) => (
          
          <Card key={recipe.id} recipe={recipe} onDelete = {onDelete} onEdit = {onEdit} loading = {loading} />

          
        ))}
         
      </div>
   
  )
}

export default RecipeList