import React, { useEffect,  useState } from 'react';
import style from './recipe.module.css';

const Recipe = (props) => {
    return(
        <div className={style.recipe}>
            <h1>{props.title}</h1>
            <p className={style.calories}>Calories: {Math.round(props.calories)}</p>
            <img src={props.image} alt="" className="image" />
            <ul className={style.ingredients}>
                {props.ingredients.map((ingredient) => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            
        </div>
    )
}

export default Recipe;