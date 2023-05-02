import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'





const TopRecipes = ({ recipe }) => {


    let { name, ingredients, method, ratings, cooking_method } = recipe;

    return (
        <div>
            <div className="card  bg-gray-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-3xl">{name}</h2>
                    <div>
                        <p className='text-2xl my-4 font-semibold '>Necessary Ingredients</p>
                        <ol className='grid grid-cols-2 text-xl my-5'>{
                            ingredients.map(ingredient => <li className='list-decimal list-inside' key={ingredient}>{ingredient}</li>)
                        }</ol>
                        <p className='text-2xl my-4 font-semibold '>Cooking Method</p> 
                        <span className='text-xl'>{method ? method : cooking_method}</span>
                    </div>
                    <div className="card-actions flex  justify-between">
                        <div className='flex items-center'>
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={ratings}
                            readOnly
                        />
                        <span>{ratings}</span>

                        </div>
                        

                        <button className="btn btn-primary">Add As favorite </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopRecipes;