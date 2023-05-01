import React from 'react';
import { Link } from 'react-router-dom';

const ChefsCard = ({chef}) => {

    let {photo, name, location, id}= chef;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} style={{height:'350px',width:'350px'}} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>From {location}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to={`/recipes/${id}`}>View Recipes</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefsCard;