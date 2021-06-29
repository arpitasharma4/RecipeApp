import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients,url}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))} 
            </ol>
            <img src={image} alt=""/>
            <a href={url} target="_blank" rel="noopener noreferrer">URL</a>
            <p>{calories}</p>
        </div>
    );
}

export default Recipe;
