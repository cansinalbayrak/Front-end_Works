import React from 'react'
import Card from '../card/card'
import './RecipeList.css'


const RecipeList = ({recipes}) => {
  return (
    
       <div className="recipe-list">
        {recipes.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} />
        ))}
      </div>
   
  )
}

export default RecipeList