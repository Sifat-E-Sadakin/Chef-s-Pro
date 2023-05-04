import React from 'react';

const ShowFavRecipes = ({item, remove}) => {

    

  


    return (
         <div className="card w-96 bg-base-100 shadow-xl">
            {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
             <div className="card-body">
                 <h2 className="card-title">{item.name}</h2>
                 <p>{item.method? item.method: item.cooking_method? item.cooking_method: item.info }</p>
                 <div className="card-actions justify-end">
                     <button onClick={()=>remove(item.id)} className="btn btn-primary">Remove from favorite</button>
                 </div>
             </div>
        </div>
    );
};

export default ShowFavRecipes;