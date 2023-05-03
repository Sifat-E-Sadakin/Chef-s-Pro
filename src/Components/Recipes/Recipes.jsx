import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './Recipes.css'
import TopRecipes from '../TopRecipes/TopRecipes';
import LazyLoad from 'react-lazy-load';

const Recipes = () => {

    let chefsRecipes = useLoaderData();
    // console.log(chefsRecipes);

    let { photo, name, experience, likes , number_of_recipes, recipes} = chefsRecipes

    // console.log(recipes);


    return (
        <div className='container mx-auto'>

            <div className='grid grid-cols-2 items-center py-10'>
                <div>
                    <LazyLoad>
                    <img src={photo} alt="" id='chef' className='rounded-xl' />
                    </LazyLoad>

                </div>
                <div>
                    <h1 className='text-3xl'> <span className='font-semibold'>{name}</span> have <span className='font-semibold'> {likes} </span> Likes and</h1>
                    <h2 className='text-2xl'>{experience}</h2>
                    <h2 className='text-xl'>Additionally, has <span className='font-semibold'>{number_of_recipes}+</span> recipes.  </h2>


                </div>

               

            </div>

            <h1 className='text-center text-4xl '>Top Recipes of {name}</h1>

            <div className='grid grid-cols-1 gap-20 my-10 '>
                {
                    recipes.map(recipe => <TopRecipes key={recipe.name} recipe={recipe}></TopRecipes>)
                }
            </div>



        </div>
    );
};

export default Recipes;