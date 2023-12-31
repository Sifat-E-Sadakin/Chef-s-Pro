import React, { useEffect } from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
import './ChefsCard.css'
const ChefsCard = ({chef}) => {

  

    let {photo, name, location, id, number_of_recipes, likes, experience,specialty}= chef;
    return (
        <div className='chefCard'>
            <div className="card lg:card-side bg-base-100 shadow-xl ">
                <figure><img className='' src={photo} style={{height:'350px',width:'350px'}} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p> {specialty} specialist <br />
                        From {location} <br /> 
                       <span>Recipes : {number_of_recipes}</span> <br />
                       <span>Like : {likes} </span> <br />
                       <span>Experience : {experience} </span>

                     </p>
                    
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary "><Link to={`/recipes/${id}`}>View Recipes</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefsCard;