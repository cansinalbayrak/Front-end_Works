import React from 'react'
import './card.css'

function Card({recipe}) {
    const { id, title, description, image } = recipe;
  return (
    // <div className='main'>
    //   {recipes.map((recipe) => (
    //     <div className="card">
    //       <img src={recipe.image} alt={`${recipe.id}`} />
    //       <div className="card-content">
    //         <h3>{recipe.title}</h3>
    //         <p>{recipe.description}</p>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>

  );
}

export default Card;