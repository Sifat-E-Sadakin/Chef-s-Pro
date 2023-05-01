import React, { useContext } from 'react';
import { userContext } from '../UserProvider/UserProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    let {user, loading} = useContext(userContext);

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user){
        return children;
    }

    
    return <Navigate to="/login" replace={true} />

};

export default PrivateRoute;