import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Recipes = () => {

    let chefsRecipes = useLoaderData();
    console.log(chefsRecipes);

    
    return (
        <div>
            
        </div>
    );
};

export default Recipes;