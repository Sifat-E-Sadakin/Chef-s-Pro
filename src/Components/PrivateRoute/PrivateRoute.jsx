import React, { useContext } from 'react';
import { userContext } from '../UserProvider/UserProvider';
import { Navigate, useLocation } from 'react-router-dom';




const PrivateRoute = ({children}) => {


    let {user, loading} = useContext(userContext);

    let location = useLocation();
    // console.log(location);
    
    
   

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children;
    }

    
    return <Navigate to="/login" state={{from : location}} replace={true}  />

};

export default PrivateRoute;