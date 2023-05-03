import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ShowTraditional = ({item}) => {
    let addToFav = (event) => {
        toast(`${item.name} added to favorite list`)
        // document.getElementById('btn').disabled= true

        event.target.disabled = true




    }

    let addToLocalStorage =(id)=>{
        console.log(id);
    }
    return (
        <div className="card w-96  shadow-2xl">
            <figure><img src={item.photo}  className=' h-60 w-96' /></figure>
            <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.info}</p>
                <div onClick={()=>addToLocalStorage(item.id)} className="card-actions justify-end">
                    <button onClick={addToFav} className="btn btn-primary">Mark As Favorite</button>
                </div>
            </div>
        </div>
    );
};

export default ShowTraditional;