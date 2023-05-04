import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../UserProvider/UserProvider';
import { getShoppingCart, removeFromDb } from '../Utilities/LocalStoraeg';
import ShowFavRecipes from './ShowFavRecipes';



const FavRecipes = () => {

    let [favRecipes, setFavRecipes]= useState([]);

    let {chefs} = useContext(userContext);
    //  console.log(chefs);

    
    let recipes;
    

  
    useEffect(()=>{
        fetch('https://assignment-10-server-seven-ashy.vercel.app/extraData')
        .then(res=>res.json())
        .then(data => config(data))

     

       

        let config= (data)=>{
            if(chefs){
                let arr =[]
                let favArr = [];
                
                for (const iterator1 of chefs) {
    
                    for (const iterator2 of iterator1.recipes) {
                        // console.log(iterator2);
                        arr.push(iterator2)
                    }
                   
                    
                }
                for (const iterator1 of data) {
                   arr.push(iterator1)
                    
                }
                
    
               
                let fromLocalStorage = getShoppingCart();
    
              
            
                for (const iterator in fromLocalStorage) {
                    let findFev = arr.find(item=> item.id == iterator)
                    if(findFev){
                        favArr.push(findFev);
                    }
                    
                }
                setFavRecipes(favArr)
                
            }
            
          

            // console.log(arr);
        }

        
    //    console.log(favRecipes);
    },[chefs])

    // console.log(arr);
    // console.log(arr);

    // console.log(arr);
    
    
 

    //  setFavRecipes(findFev);

   let remove =id=>{
    // console.log('removing', id);
    removeFromDb(id)
    if(chefs){
        let arr =[]
        let favArr = [];
        
        for (const iterator1 of chefs) {

            for (const iterator2 of iterator1.recipes) {
                // console.log(iterator2);
                arr.push(iterator2)
            }
           
            
        }
        for (const iterator1 of favRecipes) {
           arr.push(iterator1)
            
        }
        

       
        let fromLocalStorage = getShoppingCart();

      
    
        for (const iterator in fromLocalStorage) {
            let findFev = arr.find(item=> item.id == iterator)
            if(findFev){
                favArr.push(findFev);
            }
            
        }
        setFavRecipes(favArr)
        
    }
    
   }

   
    

  

   

    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl my-7 text-center'>Favorite Recipes</h1>
            <div className='grid md:grid-cols-3 gap-10'>
                {
                    favRecipes.map(item=><ShowFavRecipes remove={remove} key={item.id} item={item}></ShowFavRecipes>)
                }
               
            </div>

            
        </div>
    );
};

export default FavRecipes;