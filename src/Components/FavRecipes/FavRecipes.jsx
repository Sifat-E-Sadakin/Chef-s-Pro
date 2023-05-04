import React, { useContext, useState } from 'react';
import { userContext } from '../UserProvider/UserProvider';
import { getShoppingCart } from '../Utilities/LocalStoraeg';
import ShowFavRecipes from './ShowFavRecipes';



const FavRecipes = () => {

    let [favRecipes, setFavRecipes]= useState([]);

    let {chefs} = useContext(userContext);
    // console.log(chefs);

    let arr =[]
    let favArr = [];

    let recipes;
    for (const iterator1 of chefs) {

        for (const iterator2 of iterator1.recipes) {
            // console.log(iterator2);
            arr.push(iterator2)
        }
       
        
    }
    // console.log(arr);
    
    let fromLocalStorage = getShoppingCart();

    let findFev;

    for (const iterator in fromLocalStorage) {
         findFev = arr.find(item=> item.id == iterator)
        if(findFev){
            favArr.push(findFev);
        }
        
    }

    //  setFavRecipes(findFev);

 

   
    

  

   

    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl my-7 text-center'>Favorite Recipes</h1>
            <div className='grid md:grid-cols-3 gap-10'>
                {
                    favArr.map(item=><ShowFavRecipes key={item.id} item={item}></ShowFavRecipes>)
                }
               
            </div>

            
        </div>
    );
};

export default FavRecipes;